import { legalConfig } from '../data/legal';

export type PolicyLocale = 'en' | 'es' | 'ru';

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

export interface LegalPolicyWording {
  clientRecordRetentionDescription: string;
  securityRecordRetentionDescription: string;
  applicableLawText: string;
  disputeText: string;
}

export const policyLayoutCopy = {
  en: {
    home: 'Home',
    websiteInformation: 'Website information',
    lastReviewed: 'Last reviewed',
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
  ru: {
    home: 'Главная',
    websiteInformation: 'Информация о сайте',
    lastReviewed: 'Последняя проверка',
    contents: 'Содержание',
    contactHeading: 'Вопросы об этой информации',
    contactByEmail: 'Связаться с All Yacht Service можно по электронной почте',
    orByPhone: 'или по телефону',
    relatedHeading: 'Связанные юридические документы',
    contactLink: 'Связаться с All Yacht Service',
    returnToTop: 'Вернуться к началу',
    imageAlt: 'Руки, соединяющие белые детали пазла',
    relatedPolicies: [
      { routeId: 'privacyPolicy', label: 'Политика конфиденциальности' },
      {
        routeId: 'cookiePolicy',
        label: 'Политика использования cookies и хранения данных в браузере',
      },
      { routeId: 'legalNotice', label: 'Юридическая информация' },
      {
        routeId: 'termsAndConditions',
        label: 'Условия использования сайта',
      },
    ],
  },
} as const satisfies Record<PolicyLocale, PolicyLayoutCopy>;

export const legalPolicyWording = {
  en: {
    clientRecordRetentionDescription:
      legalConfig.clientRecordRetentionDescription!,
    securityRecordRetentionDescription:
      legalConfig.securityRecordRetentionDescription!,
    applicableLawText: legalConfig.applicableLawText!,
    disputeText: legalConfig.disputeText!,
  },
  es: {
    clientRecordRetentionDescription:
      'Los registros de clientes y servicios se conservan durante la relación profesional y, posteriormente, durante los períodos necesarios para cumplir las obligaciones contables, fiscales, contractuales, profesionales y relativas a reclamaciones legales aplicables. El acceso se restringe una vez finalizado el encargo activo.',
    securityRecordRetentionDescription:
      'Los registros de seguridad y prevención de abusos se conservan normalmente durante un máximo de 12 meses, salvo que sea necesario conservarlos durante más tiempo para investigar un incidente activo, formular o defender reclamaciones legales o cumplir una obligación legal.',
    applicableLawText: `El sitio web y los servicios operados por ${legalConfig.legalOperatorName} se rigen por la legislación española, sin perjuicio de las disposiciones imperativas de protección de los consumidores aplicables conforme a la legislación del país de residencia habitual del consumidor.`,
    disputeText:
      'Cualquier controversia se someterá a los tribunales que determine la legislación imperativa aplicable. Nada de lo dispuesto en estas condiciones restringe el derecho del consumidor a ejercitar acciones ante un tribunal competente conforme a las normas aplicables de protección de los consumidores.',
  },
  ru: {
    clientRecordRetentionDescription:
      'Записи о клиентах и услугах хранятся в течение профессиональных отношений, а после их завершения — в течение сроков, необходимых для соблюдения применимых бухгалтерских, налоговых, договорных, профессиональных обязательств и обязательств, связанных с правовыми требованиями. После завершения активного задания доступ к ним ограничивается.',
    securityRecordRetentionDescription:
      'Записи безопасности и предотвращения злоупотреблений обычно хранятся до 12 месяцев, если более длительное хранение не требуется для расследования продолжающегося инцидента, предъявления или защиты правовых требований либо исполнения юридической обязанности.',
    applicableLawText: `Сайт и услуги, оператором которых является ${legalConfig.legalOperatorName}, регулируются законодательством Испании без ущерба для обязательных норм защиты прав потребителей, применимых согласно законодательству страны обычного места жительства потребителя.`,
    disputeText:
      'Любой спор передаётся на рассмотрение судов, определяемых обязательными нормами применимого законодательства. Ничто в настоящих условиях не ограничивает право потребителя обратиться в суд, компетентный в соответствии с применимыми нормами защиты прав потребителей.',
  },
} as const satisfies Record<PolicyLocale, LegalPolicyWording>;

export function getPolicyLayoutCopy(locale: PolicyLocale): PolicyLayoutCopy {
  return policyLayoutCopy[locale];
}

export function getLegalPolicyWording(
  locale: PolicyLocale,
): LegalPolicyWording {
  return legalPolicyWording[locale];
}
