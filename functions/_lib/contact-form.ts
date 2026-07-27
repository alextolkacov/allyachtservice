export const CONTACT_FORM_LIMITS = {
  requestBytes: 4_500_000,
  attachmentCount: 3,
  attachmentBytes: 2_000_000,
  totalAttachmentBytes: 3_000_000,
  messageCharacters: 5000,
} as const;

const serviceLabels = {
  'pre-purchase-survey': 'Pre-Purchase Yacht Survey',
  'insurance-survey': 'Insurance Condition Yacht Survey',
  'buyer-representation': 'Yacht Buyer Representation',
  'yacht-delivery': 'Yacht Delivery',
  'valuation-damage-survey': 'Yacht Valuation or Damage Assessment',
  'general-enquiry': 'General Enquiry',
} as const;

const vesselTypeLabels = {
  'sailing-yacht': 'Sailing yacht',
  'motor-yacht': 'Motor yacht',
  catamaran: 'Catamaran',
  other: 'Other or not yet known',
} as const;

type ServiceValue = keyof typeof serviceLabels;
type VesselTypeValue = keyof typeof vesselTypeLabels;

export interface ContactAttachment {
  file: File;
  filename: string;
  type: string;
}

export interface ContactSubmission {
  submissionId: string;
  reference: string;
  name: string;
  email: string;
  phone: string;
  service: ServiceValue | '';
  serviceLabel: string;
  vesselType: VesselTypeValue | '';
  vesselTypeLabel: string;
  vesselLength: string;
  vesselLocation: string;
  preferredDate: string;
  message: string;
  source: string;
  pageUrl: string;
  estimateReference: string;
  calculatorSummary: string;
  turnstileToken: string;
  attachments: ContactAttachment[];
}

export interface ContactValidationResult {
  submission?: ContactSubmission;
  errors: Record<string, string>;
  isHoneypot: boolean;
}

const allowedFileTypes = new Map([
  ['application/pdf', ['pdf']],
  ['image/jpeg', ['jpg', 'jpeg']],
  ['image/png', ['png']],
  ['image/webp', ['webp']],
]);

function getText(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === 'string' ? value : '';
}

function normalizeSingleLine(value: string): string {
  return value.replace(/\s+/gu, ' ').trim();
}

function normalizeMultiline(value: string): string {
  return value.replace(/\r\n?/gu, '\n').trim();
}

function isValidEmail(value: string): boolean {
  return (
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value) &&
    !/[\r\n]/u.test(value)
  );
}

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    Number.isFinite(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu.test(
    value,
  );
}

function createReference(submissionId: string, now: number): string {
  const date = new Date(now).toISOString().slice(0, 10).replaceAll('-', '');
  return `AYS-${date}-${submissionId.slice(0, 8).toUpperCase()}`;
}

function sanitizeFilename(filename: string): string {
  const withoutControls = Array.from(filename.normalize('NFKC'))
    .filter((character) => {
      const codePoint = character.codePointAt(0) ?? 0;
      return codePoint > 31 && codePoint !== 127;
    })
    .join('')
    .normalize('NFKC')
    .replace(/[/\\]/gu, '-')
    .replace(/\s+/gu, ' ')
    .trim();
  return (withoutControls || 'attachment').slice(0, 120);
}

function getExtension(filename: string): string {
  const lastSegment = filename.toLowerCase().split('.').at(-1);
  return lastSegment ?? '';
}

async function hasExpectedSignature(file: File): Promise<boolean> {
  const bytes = new Uint8Array(await file.slice(0, 16).arrayBuffer());

  if (file.type === 'application/pdf') {
    return (
      bytes[0] === 0x25 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x44 &&
      bytes[3] === 0x46 &&
      bytes[4] === 0x2d
    );
  }

  if (file.type === 'image/jpeg') {
    return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }

  if (file.type === 'image/png') {
    const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
    return signature.every((byte, index) => bytes[index] === byte);
  }

  if (file.type === 'image/webp') {
    return (
      bytes[0] === 0x52 &&
      bytes[1] === 0x49 &&
      bytes[2] === 0x46 &&
      bytes[3] === 0x46 &&
      bytes[8] === 0x57 &&
      bytes[9] === 0x45 &&
      bytes[10] === 0x42 &&
      bytes[11] === 0x50
    );
  }

  return false;
}

async function validateAttachments(
  formData: FormData,
  errors: Record<string, string>,
): Promise<ContactAttachment[]> {
  const files = formData
    .getAll('attachments')
    .filter(
      (entry): entry is File =>
        typeof entry !== 'string' && entry.size > 0 && entry.name.length > 0,
    );

  if (files.length > CONTACT_FORM_LIMITS.attachmentCount) {
    errors.attachments = `Attach no more than ${CONTACT_FORM_LIMITS.attachmentCount} files.`;
    return [];
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > CONTACT_FORM_LIMITS.totalAttachmentBytes) {
    errors.attachments =
      'The combined attachment size must be 3 MB or smaller.';
    return [];
  }

  const attachments: ContactAttachment[] = [];

  for (const file of files) {
    const extensions = allowedFileTypes.get(file.type);
    if (!extensions || !extensions.includes(getExtension(file.name))) {
      errors.attachments = 'Use PDF, JPEG, PNG or WebP files only.';
      return [];
    }

    if (file.size > CONTACT_FORM_LIMITS.attachmentBytes) {
      errors.attachments = 'Each file must be 2 MB or smaller.';
      return [];
    }

    if (!(await hasExpectedSignature(file))) {
      errors.attachments =
        'One or more attachments do not match the selected file type.';
      return [];
    }

    attachments.push({
      file,
      filename: sanitizeFilename(file.name),
      type: file.type,
    });
  }

  return attachments;
}

export async function validateContactForm(
  formData: FormData,
  now = Date.now(),
): Promise<ContactValidationResult> {
  const errors: Record<string, string> = {};
  const website = normalizeSingleLine(getText(formData, 'website'));
  const name = normalizeSingleLine(getText(formData, 'name'));
  const email = normalizeSingleLine(getText(formData, 'email')).toLowerCase();
  const phone = normalizeSingleLine(getText(formData, 'phone'));
  const serviceRaw = normalizeSingleLine(getText(formData, 'service'));
  const vesselTypeRaw = normalizeSingleLine(getText(formData, 'vesselType'));
  const vesselLength = normalizeSingleLine(getText(formData, 'vesselLength'));
  const vesselLocation = normalizeSingleLine(
    getText(formData, 'vesselLocation'),
  );
  const preferredDate = normalizeSingleLine(getText(formData, 'preferredDate'));
  const message = normalizeMultiline(getText(formData, 'message'));
  const consent = getText(formData, 'consent');
  const source = normalizeSingleLine(getText(formData, 'source')).slice(0, 100);
  const pageUrl = normalizeSingleLine(getText(formData, 'pageUrl')).slice(
    0,
    500,
  );
  const estimateReference = normalizeSingleLine(
    getText(formData, 'estimateReference'),
  ).slice(0, 100);
  const calculatorSummary = normalizeMultiline(
    getText(formData, 'calculatorSummary'),
  ).slice(0, 4000);
  const turnstileToken = getText(formData, 'cf-turnstile-response');
  const startedAt = Number(getText(formData, 'formStartedAt'));
  const suppliedSubmissionId = normalizeSingleLine(
    getText(formData, 'submissionId'),
  );
  const submissionId = isUuid(suppliedSubmissionId)
    ? suppliedSubmissionId
    : crypto.randomUUID();

  if (website) {
    return {
      errors: {},
      isHoneypot: true,
    };
  }

  if (name.length < 2 || name.length > 100) {
    errors.name = 'Enter your name using 2 to 100 characters.';
  }

  if (!isValidEmail(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (
    phone.length > 50 ||
    (phone.length > 0 && !/^[+\d\s()./-]+$/u.test(phone))
  ) {
    errors.phone = 'Enter a valid phone or WhatsApp number.';
  }

  const service = Object.hasOwn(serviceLabels, serviceRaw)
    ? (serviceRaw as ServiceValue)
    : '';
  if (serviceRaw && !service) {
    errors.service = 'Select a valid service.';
  }

  const vesselType = Object.hasOwn(vesselTypeLabels, vesselTypeRaw)
    ? (vesselTypeRaw as VesselTypeValue)
    : '';
  if (vesselTypeRaw && !vesselType) {
    errors.vesselType = 'Select a valid vessel type.';
  }

  if (vesselLength) {
    const numericLength = Number(vesselLength);
    if (
      !Number.isFinite(numericLength) ||
      numericLength < 1 ||
      numericLength > 99
    ) {
      errors.vesselLength = 'Enter a vessel length between 1 and 99 metres.';
    }
  }

  if (vesselLocation.length > 120) {
    errors.vesselLocation = 'Use 120 characters or fewer for the location.';
  }

  if (preferredDate && !isValidDate(preferredDate)) {
    errors.preferredDate = 'Enter a valid preferred date.';
  }

  if (
    message.length < 20 ||
    message.length > CONTACT_FORM_LIMITS.messageCharacters
  ) {
    errors.message = 'Enter a message using 20 to 5,000 characters.';
  }

  if (consent !== 'yes') {
    errors.consent = 'Confirm that we may use the information to respond.';
  }

  if (turnstileToken.length === 0 || turnstileToken.length > 2048) {
    errors.verification = 'Complete the secure verification.';
  }

  if (
    !Number.isFinite(startedAt) ||
    now - startedAt < 2000 ||
    now - startedAt > 4 * 60 * 60 * 1000
  ) {
    errors.verification =
      'The form session has expired. Refresh the page and try again.';
  }

  const attachments = await validateAttachments(formData, errors);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      isHoneypot: false,
    };
  }

  return {
    submission: {
      submissionId,
      reference: createReference(submissionId, now),
      name,
      email,
      phone,
      service,
      serviceLabel: service ? serviceLabels[service] : 'Not specified',
      vesselType,
      vesselTypeLabel: vesselType
        ? vesselTypeLabels[vesselType]
        : 'Not specified',
      vesselLength,
      vesselLocation,
      preferredDate,
      message,
      source: source || 'contact-page',
      pageUrl,
      estimateReference,
      calculatorSummary,
      turnstileToken,
      attachments,
    },
    errors: {},
    isHoneypot: false,
  };
}
