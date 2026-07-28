export type PolicyLocale = 'en' | 'es';

export interface PolicyTocItem {
  id: string;
  label: string;
}

interface RelatedPolicy {
  routeId:
    'privacyPolicy' | 'cookiePolicy' | 'legalNotice' | 'termsAndConditions';
  label: string;
}

export interface PolicyLayoutCopy {
  home: string;
  websiteInformation: string;
  lastReviewed: string;
  draftHeading: string;
  draftDescription: string;
  contents: string;
  contactHeading: string;
  contactByEmail: string;
  orByPhone: string;
  relatedHeading: string;
  contactLink: string;
  returnToTop: string;
  imageAlt: string;
  relatedPolicies: readonly RelatedPolicy[];
}

export const policyLayoutCopy = {
  en: {
    home: 'Home',
    websiteInformation: 'Website information',
    lastReviewed: 'Last reviewed',
    draftHeading: 'Draft legal information',
    draftDescription:
      'This non-indexable preview contains implementation wording based on confirmed website behaviour. Operator identity, retention periods and final applicable-law wording still require confirmation and professional review before publication.',
    contents: 'On this page',
    contactHeading: 'Questions about this information',
    contactByEmail: 'Contact All Yacht Service by email at',
    orByPhone: 'or by phone at',
    relatedHeading: 'Related legal information',
    contactLink: 'Contact All Yacht Service',
    returnToTop: 'Return to top',
    imageAlt: 'Hands assembling white puzzle pieces',
    relatedPolicies: [
      { routeId: 'privacyPolicy', label: 'Privacy Policy' },
      {
        routeId: 'cookiePolicy',
        label: 'Cookie and Browser Storage Policy',
      },
      { routeId: 'legalNotice', label: 'Legal Notice' },
      {
        routeId: 'termsAndConditions',
        label: 'Website Terms and Conditions',
      },
    ],
  },
  es: {
    home: 'Inicio',
    websiteInformation: 'Información del sitio web',
    lastReviewed: 'Última revisión',
    draftHeading: 'Información legal en borrador',
    draftDescription:
      'Esta vista previa no indexable contiene textos basados en el funcionamiento confirmado del sitio web. La identidad del operador, los períodos de conservación y la redacción definitiva sobre la legislación aplicable todavía deben confirmarse y someterse a revisión profesional antes de su publicación.',
    contents: 'Contenido',
    contactHeading: 'Preguntas sobre esta información',
    contactByEmail: 'Contacte con All Yacht Service por correo electrónico en',
    orByPhone: 'o por teléfono en',
    relatedHeading: 'Información legal relacionada',
    contactLink: 'Contactar con All Yacht Service',
    returnToTop: 'Volver arriba',
    imageAlt: 'Manos montando piezas blancas de un puzle',
    relatedPolicies: [
      { routeId: 'privacyPolicy', label: 'Política de privacidad' },
      {
        routeId: 'cookiePolicy',
        label: 'Política de cookies y almacenamiento del navegador',
      },
      { routeId: 'legalNotice', label: 'Aviso legal' },
      {
        routeId: 'termsAndConditions',
        label: 'Términos y condiciones del sitio web',
      },
    ],
  },
} as const satisfies Record<PolicyLocale, PolicyLayoutCopy>;

export function getPolicyLayoutCopy(locale: PolicyLocale): PolicyLayoutCopy {
  return policyLayoutCopy[locale];
}
