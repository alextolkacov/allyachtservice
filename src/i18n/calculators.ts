import type { SurveyValidationCode } from '../lib/calculators/prePurchaseSurvey';

export type CalculatorLocale = 'en' | 'es';

export function getCalculatorLocale(locale: string): CalculatorLocale {
  return locale === 'es' ? 'es' : 'en';
}

export const surveyCalculatorCopy = {
  en: {
    heading: {
      eyebrow: 'Initial fee estimate',
      title: 'Calculate Your Survey Cost',
      introduction:
        'Enter the yacht details and select the inspection scope. The result is an approximate professional fee, not a binding quotation.',
    },
    fields: {
      loa: 'Yacht length overall, metres',
      loaPlaceholder: 'Example: 12.5',
      loaHelp:
        'Automatic estimates are available for yachts from 5 to 40 metres.',
      individualQuote: 'Request an individual quotation',
      vesselType: 'Vessel type',
      vesselTypeHelp:
        'For catamarans, multihulls and unusual vessel configurations, the result provides only an initial indication. The final quotation will be confirmed after reviewing the vessel.',
      package: 'Survey package',
      hullInspection: 'Hull inspection',
      hullHelp: 'Select the access arrangement expected for the survey.',
      fullHullNote:
        'Hull-out inspection is included in the Full Inspection Package, so this selection is fixed while that package is active.',
      additional: 'Additional inspections',
      additionalHelp:
        'Select any additional inspections required for the Custom Survey.',
      location: 'Yacht location',
      locationPlaceholder: 'Marina, city and country',
      locationHelp:
        'Travel and location-related expenses are confirmed separately in the formal quotation.',
    },
    labels: {
      vesselType: {
        sailing: 'Sailing yacht',
        motor: 'Motor yacht',
      },
      packageType: {
        base: 'Base Survey',
        custom: 'Custom Survey',
        full: 'Full Inspection Package',
      },
      packageDescription: {
        base: 'Core pre-purchase condition survey with the selected afloat or hull-out arrangement.',
        custom:
          'Base survey with individually selected additional inspections.',
        full: 'Base survey, hull-out inspection, sea trial, engine inspection and rigging inspection where applicable, including the approved package discount.',
      },
      hullInspection: {
        afloat: 'Afloat inspection only',
        'hull-out': 'Hull-out inspection',
      },
      item: {
        'base-survey': 'Base pre-purchase condition survey',
        'afloat-inspection': 'Afloat inspection only',
        'hull-out-inspection': 'Hull-out inspection',
        'sea-trial': 'Sea trial',
        'engine-inspection': 'Engine inspection',
        'rigging-sails-inspection': 'Rigging and sails inspection',
      },
      itemDescription: {
        'sea-trial':
          'Operational assessment under way where conditions permit.',
        'engine-inspection': 'Accessible machinery and propulsion inspection.',
        'rigging-sails-inspection': 'Available for sailing yachts only.',
      },
    },
    calculate: 'Calculate Estimate',
    result: {
      eyebrow: 'Initial estimate',
      heading: 'Your Estimated Survey Cost',
      priceLabel: 'Approximate professional survey fee',
      loa: 'Yacht LOA',
      vesselType: 'Vessel type',
      package: 'Survey package',
      hullInspection: 'Hull inspection',
      location: 'Yacht location',
      reference: 'Estimate reference',
      date: 'Estimate creation date',
      included: 'Included inspection items',
      discountHeading: 'Full package discount included',
      discountBody:
        'The Full Inspection Package includes a 15% discount compared with booking its included survey components separately.',
      discountLabel: 'Rounded discount:',
      exclusionsHeading: 'Important exclusions',
      exclusions: [
        'Boatyard and haul-out fees, marina charges, fuel, vessel operation, skipper or crew required for a sea trial, travel expenses, accommodation, oil analysis, specialist diagnostics, repairs and third-party services are not included unless confirmed in writing.',
        'Any applicable taxes will be confirmed in the formal quotation.',
        'This calculator provides an initial estimate only and does not constitute a quotation, contract or invoice. The final quotation depends on the yacht’s specifications, age, construction, systems, location, accessibility, haul-out arrangements, sea-trial requirements and the final agreed inspection scope.',
      ],
      requestQuote: 'Request a Formal Quotation',
      whatsapp: 'WhatsApp Your Enquiry',
      edit: 'Edit Calculation',
      reset: 'Start a New Calculation',
      privacy:
        'Your calculation remains in this browser session and is transferred to the enquiry form only when you request a quotation.',
    },
    client: {
      locale: 'en-GB',
      metres: 'metres',
      validation: {
        'missing-or-invalid-loa':
          'Please enter the yacht LOA in metres. The minimum LOA for this calculator is 5 metres.',
        'below-minimum-loa':
          'The calculator is available for yachts from 5 metres. Please contact us for an individual quotation for a smaller vessel.',
        'above-maximum-loa':
          'For vessels over 40 metres, please contact All Yacht Service for an individual quotation.',
        'invalid-vessel-type': 'Select a valid vessel type.',
        'invalid-package': 'Select a valid survey package.',
        'invalid-hull-inspection':
          'Select a valid hull inspection arrangement.',
        'invalid-options': 'Select valid additional inspections.',
      } satisfies Record<SurveyValidationCode, string>,
      liveResult: (price: string, reference: string) =>
        `Estimated survey cost ${price}. Estimate reference ${reference}.`,
    },
  },
  es: {
    heading: {
      eyebrow: 'Estimación inicial de honorarios',
      title: 'Calculadora del coste de una inspección precompra',
      introduction:
        'Introduzca los datos del yate y seleccione el alcance de la inspección. El resultado es una estimación aproximada de los honorarios profesionales, no un presupuesto vinculante.',
    },
    fields: {
      loa: 'Eslora total del yate, en metros',
      loaPlaceholder: 'Ejemplo: 12,5',
      loaHelp:
        'Las estimaciones automáticas están disponibles para yates de entre 5 y 40 metros.',
      individualQuote: 'Solicitar un presupuesto individual',
      vesselType: 'Tipo de yate',
      vesselTypeHelp:
        'Para catamaranes, multicascos y configuraciones poco habituales, el resultado ofrece únicamente una indicación inicial. El presupuesto final se confirmará después de revisar el yate.',
      package: 'Alcance de la inspección',
      hullInspection: 'Inspección del casco',
      hullHelp:
        'Seleccione el tipo de acceso previsto para realizar la inspección.',
      fullHullNote:
        'La varada e inspección fuera del agua están incluidas en el paquete de inspección completa; por ello, esta selección permanece fija mientras el paquete esté activo.',
      additional: 'Inspecciones adicionales',
      additionalHelp:
        'Seleccione las inspecciones adicionales necesarias para la inspección personalizada.',
      location: 'Ubicación del yate',
      locationPlaceholder: 'Puerto deportivo, ciudad y país',
      locationHelp:
        'Los gastos de desplazamiento y los relacionados con la ubicación se confirman por separado en el presupuesto formal.',
    },
    labels: {
      vesselType: {
        sailing: 'Yate a vela',
        motor: 'Yate a motor',
      },
      packageType: {
        base: 'Inspección base',
        custom: 'Inspección personalizada',
        full: 'Inspección completa',
      },
      packageDescription: {
        base: 'Inspección precompra básica del estado con el yate a flote o fuera del agua, según la opción seleccionada.',
        custom:
          'Inspección base con las inspecciones adicionales seleccionadas individualmente.',
        full: 'Inspección base, varada, prueba de mar, inspección de motores e inspección del aparejo cuando corresponda, incluido el descuento del paquete.',
      },
      hullInspection: {
        afloat: 'Inspección a flote',
        'hull-out': 'Varada e inspección fuera del agua',
      },
      item: {
        'base-survey': 'Inspección precompra básica del estado',
        'afloat-inspection': 'Inspección a flote',
        'hull-out-inspection': 'Varada e inspección fuera del agua',
        'sea-trial': 'Prueba de mar',
        'engine-inspection': 'Inspección de motores',
        'rigging-sails-inspection': 'Inspección del aparejo y las velas',
      },
      itemDescription: {
        'sea-trial':
          'Evaluación operativa durante la navegación cuando las condiciones lo permitan.',
        'engine-inspection':
          'Inspección de la maquinaria y la propulsión accesibles.',
        'rigging-sails-inspection': 'Disponible únicamente para yates a vela.',
      },
    },
    calculate: 'Calcular estimación',
    result: {
      eyebrow: 'Estimación aproximada',
      heading: 'Coste estimado de la inspección',
      priceLabel: 'Honorarios profesionales aproximados de la inspección',
      loa: 'Eslora del yate',
      vesselType: 'Tipo de yate',
      package: 'Alcance seleccionado',
      hullInspection: 'Inspección del casco',
      location: 'Ubicación del yate',
      reference: 'Referencia de la estimación',
      date: 'Fecha de creación de la estimación',
      included: 'Elementos de inspección incluidos',
      discountHeading: 'Descuento del paquete completo incluido',
      discountBody:
        'La inspección completa incluye un descuento del 15 % respecto a la contratación por separado de los componentes incluidos.',
      discountLabel: 'Descuento redondeado:',
      exclusionsHeading: 'Exclusiones importantes',
      exclusions: [
        'Las tarifas del varadero y de la varada, los gastos de puerto deportivo, el combustible, el manejo del yate, el patrón o la tripulación necesarios para una prueba de mar, los desplazamientos, el alojamiento, el análisis de aceite, los diagnósticos especializados, las reparaciones y los servicios de terceros no están incluidos salvo confirmación por escrito.',
        'Los impuestos aplicables se confirmarán en el presupuesto formal.',
        'Esta calculadora ofrece únicamente una estimación inicial y no constituye un presupuesto, contrato o factura. El presupuesto final depende de las especificaciones, la antigüedad, la construcción, los sistemas, la ubicación y la accesibilidad del yate, así como de la organización de la varada, los requisitos de la prueba de mar y el alcance final acordado.',
      ],
      requestQuote: 'Solicitar presupuesto',
      whatsapp: 'Enviar consulta por WhatsApp',
      edit: 'Recalcular',
      reset: 'Nueva estimación',
      privacy:
        'El cálculo permanece en esta sesión del navegador y solo se transfiere al formulario de contacto cuando solicita un presupuesto.',
    },
    client: {
      locale: 'es-ES',
      metres: 'metros',
      validation: {
        'missing-or-invalid-loa':
          'Introduzca una eslora válida. La eslora mínima admitida por esta calculadora es de 5 metros.',
        'below-minimum-loa':
          'La eslora mínima admitida es de 5 metros. Solicite un presupuesto individual para una embarcación de menor eslora.',
        'above-maximum-loa':
          'La calculadora admite yates de hasta 40 metros. Para yates de mayor eslora, solicite un presupuesto individual a All Yacht Service.',
        'invalid-vessel-type': 'Seleccione un tipo de yate válido.',
        'invalid-package': 'Seleccione un alcance de inspección válido.',
        'invalid-hull-inspection':
          'Seleccione un tipo válido de inspección del casco.',
        'invalid-options': 'Seleccione inspecciones adicionales válidas.',
      } satisfies Record<SurveyValidationCode, string>,
      liveResult: (price: string, reference: string) =>
        `Coste estimado de la inspección: ${price}. Referencia de la estimación: ${reference}.`,
    },
  },
} as const;

export const deliveryCalculatorCopy = {
  en: {
    heading: {
      eyebrow: 'Initial route and fee estimate',
      title: 'Calculate Your Yacht Delivery Cost',
      introduction:
        'Select a genuine departure and destination from the supported port list, then add the yacht and delivery conditions. The result is approximate and non-binding.',
    },
    route: {
      legend: 'Route',
      departure: 'Departure port',
      departurePlaceholder:
        'Search a port, for example Altea, Barcelona or Cannes',
      departureAria: 'Departure ports',
      departureHelp: 'Start typing and choose a departure port from the list.',
      destination: 'Destination port',
      destinationPlaceholder:
        'Search a port, for example Palma, Genoa or Athens',
      destinationAria: 'Destination ports',
      destinationHelp:
        'Start typing and choose a destination port from the list.',
      swapAria: 'Swap departure and destination',
      swap: 'Swap ports',
      coverageBefore:
        'The calculator currently supports the listed Mediterranean and nearby Atlantic ports. For a port not shown,',
      coverageLink: 'please request an individual route quotation',
    },
    fields: {
      yachtType: 'Yacht type',
      lengthBand: 'Yacht length band',
      lengthHelp:
        'The final quotation will be based on the yacht’s exact dimensions, displacement, systems and condition.',
      complexity: 'Delivery complexity',
      complexityHelp:
        'The selected category provides an initial estimate only. The final delivery classification will be confirmed after route and vessel review.',
      timing: 'Timing',
      timingHelp:
        'Urgent delivery means a request requiring accelerated preparation or mobilisation and remains subject to availability.',
    },
    labels: {
      yachtType: {
        sailing: 'Sailing yacht',
        motor: 'Motor yacht',
      },
      lengthBand: {
        small: 'Up to 12 m',
        medium: 'Over 12 m to 18 m',
        large: 'Over 18 m to 24 m',
        xlarge: 'Over 24 m',
      },
      complexity: {
        standard: 'Standard Mediterranean Delivery',
        offshore: 'Long Passage / Offshore Delivery',
        complex: 'Complex Delivery / Multiple Formalities',
      },
      complexityDescription: {
        standard:
          'A normally planned coastal or Mediterranean delivery without unusual formalities identified at the initial enquiry stage.',
        offshore:
          'A longer or offshore passage requiring additional planning and operational consideration.',
        complex:
          'A delivery involving additional borders, formalities, route constraints or other operational complexity.',
      },
      urgency: {
        standard: 'Standard planning',
        urgent: 'Urgent delivery',
      },
    },
    calculate: 'Calculate Estimate',
    result: {
      eyebrow: 'Initial estimate',
      heading: 'Your Estimated Yacht Delivery Cost',
      distance: 'Approximate sea-route distance',
      fee: 'Estimated starting professional delivery fee',
      departure: 'Departure port',
      destination: 'Destination port',
      corridor: 'Approximate marine corridor',
      yachtType: 'Yacht type',
      lengthBand: 'Yacht length band',
      complexity: 'Delivery complexity',
      timing: 'Timing selection',
      reference: 'Estimate reference',
      date: 'Estimate date',
      assumptionsHeading: 'Important Route Assumptions',
      assumptions: [
        'The distance is an approximate sea-route distance calculated from a simplified marine route graph. It is not a navigational route, passage plan or substitute for current marine charts.',
        'Final passage planning must be confirmed using current marine charts, Notices to Mariners, weather routing, port and border restrictions, the yacht’s actual condition, equipment, range, performance and crew requirements.',
      ],
      exclusionsHeading: 'Excluded Costs',
      exclusions: [
        'The estimated starting professional delivery fee does not automatically include fuel, lubricants, provisions, marina or berthing fees, flights, crew travel, local transport, accommodation, customs or agent fees, canal or lock charges, permits, repairs, spare parts, surveys, haul-out, weather waiting, owner-requested waiting time or third-party services unless confirmed in writing.',
        'Any applicable taxes will be confirmed in the formal quotation.',
      ],
      disclaimerHeading: 'Non-Binding Estimate',
      disclaimer:
        'This calculator provides an initial estimate only and does not constitute a quotation, contract or invoice. The final quotation depends on the yacht’s exact specifications, condition, location, route, required crew, preparation requirements, operational complexity, timing and the agreed delivery scope.',
      requestQuote: 'Request a Formal Quotation',
      whatsapp: 'WhatsApp Your Enquiry',
      edit: 'Edit Route',
      reset: 'Start a New Route',
      privacy:
        'Your route calculation remains in this browser session and is transferred to the enquiry form only when you request a quotation.',
    },
    client: {
      locale: 'en-GB',
      nauticalMiles: 'nautical miles',
      startTyping: 'Start typing to filter ports',
      noPorts: 'No ports found',
      invalidDeparture: 'Please select a valid departure port from the list.',
      invalidDestination:
        'Please select a valid destination port from the list.',
      samePorts: 'Departure and destination cannot be the same port.',
      routeUnavailable:
        'No approximate sea route was found for this combination. Please contact us for an individual route quotation.',
      whatsapp: {
        heading: 'Yacht delivery estimate',
        departure: 'Departure',
        destination: 'Destination',
        distance: 'Approximate distance',
        fee: 'Approximate starting fee',
      },
      liveResult: (distance: string, price: string, reference: string) =>
        `Approximate sea-route distance ${distance}. Estimated starting professional delivery fee ${price}. Estimate reference ${reference}.`,
    },
  },
  es: {
    heading: {
      eyebrow: 'Estimación inicial de ruta y honorarios',
      title: 'Calculadora de entrega profesional de yates',
      introduction:
        'Seleccione un puerto de salida y un destino de la lista disponible y añada los datos del yate y de la entrega. El resultado es aproximado y no vinculante.',
    },
    route: {
      legend: 'Ruta',
      departure: 'Puerto de salida',
      departurePlaceholder:
        'Buscar puerto, por ejemplo Altea, Barcelona o Cannes',
      departureAria: 'Puertos de salida',
      departureHelp:
        'Empiece a escribir y seleccione un puerto de salida de la lista.',
      destination: 'Puerto de destino',
      destinationPlaceholder:
        'Buscar puerto, por ejemplo Palma, Génova o Atenas',
      destinationAria: 'Puertos de destino',
      destinationHelp:
        'Empiece a escribir y seleccione un puerto de destino de la lista.',
      swapAria: 'Intercambiar los puertos de salida y destino',
      swap: 'Intercambiar puertos',
      coverageBefore:
        'La calculadora admite actualmente los puertos indicados del Mediterráneo y del Atlántico próximo. Si el puerto no aparece,',
      coverageLink: 'solicite un presupuesto de ruta individual',
    },
    fields: {
      yachtType: 'Tipo de yate',
      lengthBand: 'Intervalo de eslora del yate',
      lengthHelp:
        'El presupuesto final se basará en las dimensiones exactas, el desplazamiento, los sistemas y el estado del yate.',
      complexity: 'Complejidad de la entrega',
      complexityHelp:
        'La categoría seleccionada ofrece únicamente una estimación inicial. La clasificación definitiva de la entrega se confirmará después de revisar la ruta y el yate.',
      timing: 'Urgencia',
      timingHelp:
        'La entrega urgente requiere una preparación o movilización aceleradas y está sujeta a disponibilidad.',
    },
    labels: {
      yachtType: {
        sailing: 'Yate a vela',
        motor: 'Yate a motor',
      },
      lengthBand: {
        small: 'Hasta 12 m',
        medium: 'Más de 12 m y hasta 18 m',
        large: 'Más de 18 m y hasta 24 m',
        xlarge: 'Más de 24 m',
      },
      complexity: {
        standard: 'Entrega estándar en el Mediterráneo',
        offshore: 'Travesía larga o entrega en alta mar',
        complex: 'Entrega compleja o con múltiples formalidades',
      },
      complexityDescription: {
        standard:
          'Entrega costera o mediterránea con planificación normal y sin formalidades inusuales detectadas en la consulta inicial.',
        offshore:
          'Travesía más larga o en alta mar que requiere planificación adicional y consideraciones operativas.',
        complex:
          'Entrega con fronteras, formalidades, limitaciones de ruta u otros factores operativos adicionales.',
      },
      urgency: {
        standard: 'Planificación estándar',
        urgent: 'Entrega prioritaria',
      },
    },
    calculate: 'Calcular entrega',
    result: {
      eyebrow: 'Estimación aproximada',
      heading: 'Estimación de la entrega profesional',
      distance: 'Distancia marítima aproximada',
      fee: 'Honorarios profesionales iniciales estimados',
      departure: 'Puerto de salida',
      destination: 'Puerto de destino',
      corridor: 'Corredor marítimo aproximado',
      yachtType: 'Tipo de yate',
      lengthBand: 'Intervalo de eslora',
      complexity: 'Complejidad de la entrega',
      timing: 'Urgencia seleccionada',
      reference: 'Referencia de la estimación',
      date: 'Fecha de la estimación',
      assumptionsHeading: 'Supuestos importantes de la ruta',
      assumptions: [
        'La distancia indicada corresponde a una ruta marítima aproximada calculada mediante un grafo simplificado de rutas marítimas. No es una ruta de navegación, un plan de travesía ni sustituye a las cartas náuticas actualizadas.',
        'La planificación definitiva de la travesía debe confirmarse mediante cartas náuticas actualizadas, Avisos a los Navegantes, información meteorológica, restricciones portuarias y fronterizas, y una evaluación del estado, el equipo, la autonomía, el rendimiento y las necesidades de tripulación del yate.',
      ],
      exclusionsHeading: 'Costes excluidos',
      exclusions: [
        'Los honorarios profesionales iniciales estimados no incluyen automáticamente combustible, lubricantes, provisiones, tasas de puerto o atraque, vuelos, viajes de la tripulación, transporte local, alojamiento, aduanas o agentes, tasas de canales o esclusas, permisos, reparaciones, repuestos, inspecciones, varada, esperas por meteorología, esperas solicitadas por el propietario ni servicios de terceros, salvo confirmación por escrito.',
        'Los impuestos aplicables se confirmarán en el presupuesto formal.',
      ],
      disclaimerHeading: 'Estimación no vinculante',
      disclaimer:
        'Esta calculadora ofrece únicamente una estimación inicial y no constituye una ruta de navegación, un plan de travesía, un presupuesto, contrato o factura. El presupuesto final depende de las especificaciones exactas, el estado y la ubicación del yate, la ruta, la tripulación necesaria, la preparación, la complejidad operativa, los plazos y el alcance acordado de la entrega.',
      requestQuote: 'Solicitar presupuesto de entrega',
      whatsapp: 'Enviar consulta por WhatsApp',
      edit: 'Recalcular',
      reset: 'Nueva ruta',
      privacy:
        'El cálculo de la ruta permanece en esta sesión del navegador y solo se transfiere al formulario de contacto cuando solicita un presupuesto.',
    },
    client: {
      locale: 'es-ES',
      nauticalMiles: 'millas náuticas',
      startTyping: 'Empiece a escribir para filtrar los puertos',
      noPorts: 'No se encontraron puertos',
      invalidDeparture: 'Seleccione un puerto de salida válido de la lista.',
      invalidDestination: 'Seleccione un puerto de destino válido de la lista.',
      samePorts:
        'El puerto de salida y el puerto de destino deben ser diferentes.',
      routeUnavailable:
        'No se ha podido calcular una ruta marítima aproximada entre los puertos seleccionados. Solicite un presupuesto de ruta individual.',
      whatsapp: {
        heading: 'Estimación de entrega de yate',
        departure: 'Salida',
        destination: 'Destino',
        distance: 'Distancia aproximada',
        fee: 'Honorarios iniciales aproximados',
      },
      liveResult: (distance: string, price: string, reference: string) =>
        `Distancia marítima aproximada: ${distance}. Honorarios profesionales iniciales estimados: ${price}. Referencia de la estimación: ${reference}.`,
    },
  },
} as const;

export function formatCalculatorCurrency(
  locale: CalculatorLocale,
  value: number,
): string {
  return new Intl.NumberFormat(surveyCalculatorCopy[locale].client.locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCalculatorDate(
  locale: CalculatorLocale,
  value: Date,
): string {
  return new Intl.DateTimeFormat(surveyCalculatorCopy[locale].client.locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(value);
}

export function formatCalculatorMetres(
  locale: CalculatorLocale,
  value: number,
): string {
  const copy = surveyCalculatorCopy[locale].client;
  return `${value.toLocaleString(copy.locale, {
    maximumFractionDigits: 1,
  })} ${copy.metres}`;
}

export function formatCalculatorDistance(
  locale: CalculatorLocale,
  value: number,
): string {
  const copy = deliveryCalculatorCopy[locale].client;
  return `${value.toLocaleString(copy.locale)} ${copy.nauticalMiles}`;
}
