import type { SpanishPolicyPage } from './types';

export const spanishLegalNotice = {
  title: 'Aviso legal | All Yacht Service',
  description:
    'Información legal y datos del operador del sitio web de All Yacht Service.',
  heading: 'Aviso legal',
  intro:
    'Este aviso proporciona información verificada sobre el operador, los datos de contacto y el uso del sitio web de All Yacht Service.',
  pathname: '/es/legal-notice',
  routeId: 'legalNotice',
  toc: [
    { id: 'operator', label: 'Operador del sitio web' },
    { id: 'professional-information', label: 'Información profesional' },
    { id: 'purpose', label: 'Finalidad del sitio web' },
    { id: 'contact-details', label: 'Contacto' },
    { id: 'intellectual-property', label: 'Propiedad intelectual' },
    { id: 'external-links', label: 'Enlaces externos' },
    { id: 'availability', label: 'Disponibilidad y exactitud' },
    { id: 'applicable-law', label: 'Legislación aplicable' },
  ],
} as const satisfies SpanishPolicyPage;
