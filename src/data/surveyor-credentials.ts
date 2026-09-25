import type { Locale } from './languages';

export const surveyorCredentialAssets = {
  logo: {
    src: '/images/credentials/iims-logo.png',
    width: 1254,
    height: 1254,
  },
  certificate: {
    src: '/images/credentials/aleksandrs-tolkacovs-iims-certificate.pdf',
    previewSrc:
      '/images/credentials/aleksandrs-tolkacovs-iims-certificate-preview.png',
    previewWidth: 1323,
    previewHeight: 1871,
  },
} as const;

export const surveyorCredentialCopy = {
  en: {
    sectionHeading: 'Professional Qualifications',
    compactHeading: 'Professional surveyor credentials',
    name: 'Aleksandrs Tolkacovs',
    title: 'IIMS-Certified Yacht and Small Craft Marine Surveyor',
    description:
      'Aleksandrs Tolkacovs holds the IIMS Professional Qualification in Yacht and Small Craft Marine Surveying. His qualification supports a structured, independent approach to yacht condition assessment, pre-purchase surveys and related marine surveying assignments.',
    logoAlt: 'International Institute of Marine Surveying (IIMS) logo',
    certificateAlt: 'IIMS certificate for Aleksandrs Tolkacovs',
    viewCertificate: 'View IIMS Certificate',
    certificateDialogTitle: 'IIMS certificate for Aleksandrs Tolkacovs',
    closeCertificate: 'Close certificate',
    openOriginal: 'Open original PDF',
    opensNewTab: 'opens in a new tab',
    viewCredentials: 'View professional credentials',
    aboutHref: '/about-us#professional-qualifications',
  },
  es: {
    sectionHeading: 'Cualificaciones profesionales',
    compactHeading: 'Credenciales profesionales del inspector naval',
    name: 'Aleksandrs Tolkacovs',
    title:
      'Inspector naval de yates y embarcaciones menores certificado por IIMS',
    description:
      'Aleksandrs Tolkacovs cuenta con la cualificación profesional de IIMS en inspección de yates y embarcaciones menores. Su cualificación respalda un enfoque estructurado e independiente de la evaluación del estado de yates, las inspecciones precompra y otros encargos de inspección naval.',
    logoAlt: 'Logotipo del International Institute of Marine Surveying (IIMS)',
    certificateAlt: 'Certificado IIMS de Aleksandrs Tolkacovs',
    viewCertificate: 'Ver certificado IIMS',
    certificateDialogTitle: 'Certificado IIMS de Aleksandrs Tolkacovs',
    closeCertificate: 'Cerrar certificado',
    openOriginal: 'Abrir PDF original',
    opensNewTab: 'se abre en una pestaña nueva',
    viewCredentials: 'Ver credenciales profesionales',
    aboutHref: '/es/about-us#professional-qualifications',
  },
  ru: {
    sectionHeading: 'Профессиональная квалификация',
    compactHeading: 'Профессиональная квалификация сюрвейера',
    name: 'Aleksandrs Tolkacovs',
    title: 'Сертифицированный IIMS сюрвейер яхт и маломерных судов',
    description:
      'Aleksandrs Tolkacovs имеет профессиональную квалификацию IIMS в области сюрвейерских осмотров яхт и маломерных судов. Эта квалификация поддерживает системный и независимый подход к оценке технического состояния яхт, предпокупочным осмотрам и другим сюрвейерским заданиям.',
    logoAlt: 'Логотип International Institute of Marine Surveying (IIMS)',
    certificateAlt: 'Сертификат IIMS Aleksandrs Tolkacovs',
    viewCertificate: 'Посмотреть сертификат IIMS',
    certificateDialogTitle: 'Сертификат IIMS Aleksandrs Tolkacovs',
    closeCertificate: 'Закрыть сертификат',
    openOriginal: 'Открыть оригинал в PDF',
    opensNewTab: 'откроется в новой вкладке',
    viewCredentials: 'Посмотреть профессиональную квалификацию',
    aboutHref: '/ru/about-us#professional-qualifications',
  },
} as const satisfies Record<Locale, object>;
