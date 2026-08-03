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
  roiViesRegistered: boolean;
  registryName: string | null;
  registryInscription: string | null;
  irus: string | null;
  cnae: string | null;
  registeredAddress: string | null;
  publicOfficeAddress: string;
  legalContactAddressConfirmed: boolean;
  responsibleContactName: string;
  responsibleContactPosition: string;
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
  disputeText: string | null;
  lastReviewed: string;
  finalPolicyOwnerApproved: boolean;
  policyOwnerApprovalDate: string | null;
  externalLegalReviewCompleted: boolean;
}

export const legalConfig: LegalConfiguration = {
  tradingName: siteConfig.name,
  legalOperatorName: 'PREMIUM YACHTS SPAIN, S.L.',
  operatorType: 'legal-entity',
  legalForm: 'Sociedad de Responsabilidad Limitada (S.L.)',
  taxIdRequirement: 'required',
  taxId: 'B06898027',
  roiViesRegistered: false,
  registryName: 'Registro Mercantil de Alicante',
  registryInscription:
    'Tomo 4397, Folio 27, Sección 8, Hoja A-175501, Inscripción 2',
  irus: '1000174884885',
  cnae: '3011 — Construcción de barcos y estructuras flotantes',
  registeredAddress:
    'C/ Gran Bretaña 2, Esc. 1, 18 A, 03710 Calp, Alicante, Spain',
  publicOfficeAddress:
    'Edificio Timonel, Local 73, Puerto Deportivo Luis Campomanes / Marina Greenwich, 03599 Altea, Alicante, Spain',
  legalContactAddressConfirmed: true,
  responsibleContactName: 'Aleksandrs Tolkacovs',
  responsibleContactPosition: 'Chief Operating Officer',
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  websiteUrl: siteConfig.url,
  country: 'Spain',
  privacyContactEmail: siteConfig.contact.email,
  enquiryRetentionMonths: 12,
  unsuccessfulQuoteRetentionMonths: 12,
  clientRecordRetentionDescription:
    'Client and service records are retained for the duration of the professional relationship and afterwards for the periods necessary to comply with applicable accounting, tax, contractual, professional and legal-claims obligations. Access is restricted once the active engagement has ended.',
  securityRecordRetentionDescription:
    'Security and anti-abuse records are normally retained for up to 12 months, unless longer retention is necessary to investigate an active incident, establish or defend legal claims, or comply with a legal obligation.',
  applicableLawText:
    'The website and services operated by PREMIUM YACHTS SPAIN, S.L. are governed by Spanish law, without prejudice to any mandatory consumer protections that apply under the law of the consumer’s habitual residence.',
  disputeText:
    'Any dispute will be submitted to the courts determined by mandatory applicable law. Nothing in these terms restricts a consumer’s right to bring proceedings before a court competent under applicable consumer-protection rules.',
  lastReviewed: '2026-07-30',
  finalPolicyOwnerApproved: true,
  policyOwnerApprovalDate: '2026-07-30',
  externalLegalReviewCompleted: false,
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

  if (!config.registeredAddress) {
    missing.push({
      field: 'registeredAddress',
      reason: 'provide the verified registered legal address',
    });
  }

  if (
    !config.registryName ||
    !config.registryInscription ||
    !config.irus ||
    !config.cnae
  ) {
    missing.push({
      field: 'registryInscription',
      reason: 'provide the verified Mercantile Registry, IRUS and CNAE details',
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

  if (!config.disputeText) {
    missing.push({
      field: 'disputeText',
      reason: 'approve the dispute wording',
    });
  }

  if (
    !config.lastReviewed ||
    !config.finalPolicyOwnerApproved ||
    !config.policyOwnerApprovalDate
  ) {
    missing.push({
      field: 'finalPolicyOwnerApproved',
      reason: 'record final approval and the approval date from the operator',
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
      'Indexable production build blocked: complete the required legal operator, retention, operator-approval and applicable-law fields in src/data/legal.ts.',
      details,
      'Keep PUBLIC_SITE_INDEXABLE=false until the verified configuration, localized policies and final operator approval are complete.',
    ].join('\n'),
  );
}

export function formatLegalReviewDate(
  date: string,
  locale: 'en' | 'es' | 'ru' = 'en',
): string {
  const dateLocale =
    locale === 'es' ? 'es-ES' : locale === 'ru' ? 'ru-RU' : 'en-GB';

  return new Intl.DateTimeFormat(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
