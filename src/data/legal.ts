import { siteConfig } from './site';

export type OperatorType = 'natural-person' | 'legal-entity';
export type TaxIdRequirement = 'required' | 'not-required';

export interface LegalConfiguration {
  tradingName: string;
  legalOperatorName: string | null;
  operatorType: OperatorType | null;
  legalForm: string | null;
  taxIdRequirement: TaxIdRequirement | null;
  taxId: string | null;
  registryName: string | null;
  registryNumber: string | null;
  registeredAddress: string | null;
  publicOfficeAddress: string;
  legalContactAddressConfirmed: boolean;
  email: string;
  phone: string;
  websiteUrl: string;
  country: string;
  privacyContactEmail: string;
  enquiryRetentionMonths: number | null;
  unsuccessfulQuoteRetentionMonths: number | null;
  clientRecordRetentionDescription: string | null;
  securityRecordRetentionDescription: string | null;
  applicableLawText: string | null;
  lastReviewed: string;
  finalPolicyReviewApproved: boolean;
}

export const legalConfig: LegalConfiguration = {
  tradingName: siteConfig.name,
  legalOperatorName: null,
  operatorType: null,
  legalForm: null,
  taxIdRequirement: null,
  taxId: null,
  registryName: null,
  registryNumber: null,
  registeredAddress: null,
  publicOfficeAddress: siteConfig.address.formatted,
  legalContactAddressConfirmed: false,
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  websiteUrl: siteConfig.url,
  country: 'Spain',
  privacyContactEmail: siteConfig.contact.email,
  enquiryRetentionMonths: null,
  unsuccessfulQuoteRetentionMonths: null,
  clientRecordRetentionDescription: null,
  securityRecordRetentionDescription: null,
  applicableLawText: null,
  lastReviewed: '2026-07-28',
  finalPolicyReviewApproved: false,
};

export interface MissingLegalField {
  field: keyof LegalConfiguration;
  reason: string;
}

export function getMissingProductionLegalFields(
  config: LegalConfiguration = legalConfig,
): MissingLegalField[] {
  const missing: MissingLegalField[] = [];

  if (!config.legalOperatorName) {
    missing.push({
      field: 'legalOperatorName',
      reason: 'confirm the legal operator name',
    });
  }

  if (!config.operatorType) {
    missing.push({
      field: 'operatorType',
      reason:
        'confirm whether the operator is a natural person or legal entity',
    });
  } else if (config.operatorType === 'legal-entity' && !config.legalForm) {
    missing.push({
      field: 'legalForm',
      reason: 'confirm the legal form of the legal entity',
    });
  }

  if (!config.taxIdRequirement) {
    missing.push({
      field: 'taxIdRequirement',
      reason: 'confirm whether a tax identifier must be published',
    });
  } else if (config.taxIdRequirement === 'required' && !config.taxId) {
    missing.push({
      field: 'taxId',
      reason: 'provide the legally required tax identifier',
    });
  }

  if (!config.legalContactAddressConfirmed) {
    missing.push({
      field: 'legalContactAddressConfirmed',
      reason: 'confirm a legally valid contact or registered address',
    });
  }

  if (config.enquiryRetentionMonths === null) {
    missing.push({
      field: 'enquiryRetentionMonths',
      reason: 'approve a retention period for general enquiries',
    });
  }

  if (config.unsuccessfulQuoteRetentionMonths === null) {
    missing.push({
      field: 'unsuccessfulQuoteRetentionMonths',
      reason: 'approve a retention period for unsuccessful quotations',
    });
  }

  if (!config.clientRecordRetentionDescription) {
    missing.push({
      field: 'clientRecordRetentionDescription',
      reason: 'approve retention criteria for instructed-service records',
    });
  }

  if (!config.securityRecordRetentionDescription) {
    missing.push({
      field: 'securityRecordRetentionDescription',
      reason: 'approve retention criteria for security records',
    });
  }

  if (!config.applicableLawText) {
    missing.push({
      field: 'applicableLawText',
      reason: 'approve the applicable-law and dispute wording',
    });
  }

  if (!config.lastReviewed || !config.finalPolicyReviewApproved) {
    missing.push({
      field: 'finalPolicyReviewApproved',
      reason: 'record final legal review and approval of the policy date',
    });
  }

  return missing;
}

export function isProductionLegalConfigurationComplete(
  config: LegalConfiguration = legalConfig,
): boolean {
  return getMissingProductionLegalFields(config).length === 0;
}

export function assertLegalConfigurationForIndexableBuild(
  siteIndexable: string | undefined,
  config: LegalConfiguration = legalConfig,
): void {
  if (siteIndexable !== 'true') return;

  const missing = getMissingProductionLegalFields(config);
  if (missing.length === 0) return;

  const details = missing
    .map(({ field, reason }) => `- ${String(field)}: ${reason}`)
    .join('\n');

  throw new Error(
    [
      'Indexable production build blocked: complete the required legal operator, retention, review and applicable-law fields in src/data/legal.ts.',
      details,
      'Keep PUBLIC_SITE_INDEXABLE=false until the configuration has received final Spanish legal review.',
    ].join('\n'),
  );
}

export function formatLegalReviewDate(
  date: string,
  locale: 'en' | 'es' = 'en',
): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
