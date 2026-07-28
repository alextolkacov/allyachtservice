import type { HomeService } from '../home';

export const spanishHomeServices = [
  {
    title: 'Inspección precompra',
    description:
      'Inspección independiente del casco, la estructura, los sistemas, la maquinaria y los equipos de seguridad antes de comprar.',
    href: '/es/pre-purchase-survey',
    image: {
      src: '/images/pre-purchase-survey.webp',
      alt: 'Medidor de humedad utilizado durante la inspección del casco de un yate',
      width: 1200,
      height: 674,
    },
  },
  {
    title: 'Inspección de condición para seguro',
    description:
      'Evaluación del estado e informe profesional para solicitudes y renovaciones de seguro.',
    href: '/es/insurance-survey',
    image: {
      src: '/images/insurance-condition-survey.webp',
      alt: 'Veleros evaluados después de daños provocados por una tormenta',
      width: 1280,
      height: 720,
    },
  },
  {
    title: 'Valoración y evaluación de daños',
    description:
      'Valoración independiente basada en el estado y evaluación documentada de daños para un propósito acordado.',
    href: '/es/valuation-damage-survey',
    image: {
      src: '/images/pre-purchase-survey.webp',
      alt: 'Medición de humedad durante una inspección técnica de un yate',
      width: 1200,
      height: 674,
    },
  },
  {
    title: 'Entrega profesional de yates',
    description:
      'Entrega profesional de veleros, yates a motor y catamaranes en España y el Mediterráneo.',
    href: '/es/yacht-delivery',
    image: {
      src: '/images/yacht-delivery.webp',
      alt: 'Tripulación profesional preparando un velero para su entrega',
      width: 1280,
      height: 719,
    },
  },
  {
    title: 'Representación del comprador',
    description:
      'Asistencia técnica independiente antes, durante y después de la compra de un yate.',
    href: '/es/buyer-representation',
    image: {
      src: '/images/buyer-representation.webp',
      alt: 'Comprador revisando documentación con asistencia independiente',
      width: 1280,
      height: 719,
    },
  },
  {
    title: 'Sobre All Yacht Service',
    description:
      'Inspección independiente de yates y asistencia técnica desde Marina Greenwich, Altea.',
    href: '/es/about-us',
    image: {
      src: '/images/about-all-yacht-service.webp',
      alt: 'Trabajo en equipo para coordinar un servicio técnico profesional',
      width: 1280,
      height: 719,
    },
  },
] satisfies readonly HomeService[];
