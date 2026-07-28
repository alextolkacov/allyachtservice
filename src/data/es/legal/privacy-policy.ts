import type { SpanishPolicyPage } from './types';

export const spanishPrivacyPolicy = {
  title: 'Política de privacidad | All Yacht Service',
  description:
    'Conozca cómo All Yacht Service trata los datos personales enviados mediante consultas, archivos adjuntos, calculadoras y servicios de seguridad del sitio web.',
  heading: 'Política de privacidad',
  intro:
    'Este aviso explica cómo se tratan los datos personales cuando contacta con All Yacht Service, utiliza una calculadora, envía archivos o interactúa con los servicios de seguridad del sitio web.',
  pathname: '/es/privacy-policy',
  routeId: 'privacyPolicy',
  toc: [
    { id: 'responsible', label: 'Responsable de sus datos personales' },
    { id: 'data-collected', label: 'Datos personales que recopilamos' },
    { id: 'calculator-data', label: 'Datos de las calculadoras' },
    { id: 'uses', label: 'Cómo utilizamos los datos personales' },
    { id: 'legal-bases', label: 'Bases jurídicas' },
    { id: 'required-information', label: 'Información obligatoria y opcional' },
    { id: 'attachments', label: 'Archivos adjuntos' },
    { id: 'recipients', label: 'Proveedores de servicios y destinatarios' },
    { id: 'turnstile', label: 'Cloudflare Turnstile' },
    { id: 'google-workspace', label: 'Google Workspace' },
    {
      id: 'international-transfers',
      label: 'Transferencias internacionales de datos',
    },
    { id: 'retention', label: 'Conservación de los datos' },
    { id: 'security', label: 'Seguridad' },
    { id: 'rights', label: 'Sus derechos' },
    { id: 'automated-decisions', label: 'Decisiones automatizadas' },
    { id: 'third-party-links', label: 'Enlaces de terceros' },
    { id: 'changes', label: 'Cambios en esta política' },
  ],
} as const satisfies SpanishPolicyPage;
