import type { SpanishPolicyPage } from './types';

export const spanishTermsAndConditions = {
  title: 'Términos y condiciones del sitio web | All Yacht Service',
  description:
    'Condiciones aplicables al uso del sitio web, calculadoras, artículos educativos y enlaces externos de All Yacht Service.',
  heading: 'Términos y condiciones del sitio web',
  intro:
    'Estas condiciones regulan únicamente el uso de este sitio web. No constituyen condiciones de un encargo de inspección, un contrato de inspección o entrega de yates, un acuerdo de intermediación o reparación, un acuerdo sobre el uso o confianza en un informe ni un acuerdo de contratación en línea.',
  pathname: '/es/terms-and-conditions',
  routeId: 'termsAndConditions',
  toc: [
    { id: 'acceptance', label: 'Aceptación de las condiciones' },
    { id: 'information', label: 'Finalidad informativa' },
    { id: 'calculators', label: 'Estimaciones de las calculadoras' },
    { id: 'services', label: 'Servicios de inspección y asistencia técnica' },
    { id: 'reports', label: 'Informes' },
    { id: 'tips', label: 'Consejos para la inspección de yates' },
    {
      id: 'brokerage',
      label: 'Yates en venta e intermediación externa',
    },
    { id: 'external-links', label: 'Enlaces externos' },
    { id: 'permitted-use', label: 'Propiedad intelectual y uso permitido' },
    { id: 'prohibited-use', label: 'Usos prohibidos' },
    { id: 'liability', label: 'Responsabilidad' },
    { id: 'changes', label: 'Cambios' },
    { id: 'governing-law', label: 'Legislación aplicable y controversias' },
  ],
} as const satisfies SpanishPolicyPage;
