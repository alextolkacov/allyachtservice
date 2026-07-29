import type { Locale } from '../data/languages';
import type { ContactService } from '../utils/contact';

export type ContactLocale = 'en' | 'es' | 'ru';

export function getContactLocale(locale: Locale): ContactLocale {
  return locale;
}

export const contactServiceLabels = {
  en: {
    'pre-purchase-survey': 'Pre-Purchase Yacht Survey',
    'insurance-survey': 'Insurance Condition Yacht Survey',
    'buyer-representation': 'Yacht Buyer Representation',
    'yacht-delivery': 'Yacht Delivery',
    'valuation-damage-survey': 'Yacht Valuation or Damage Assessment',
    'general-enquiry': 'General Enquiry',
  },
  es: {
    'pre-purchase-survey': 'Inspección precompra',
    'insurance-survey': 'Inspección de condición para seguro',
    'buyer-representation': 'Representación del comprador',
    'yacht-delivery': 'Entrega profesional de yates',
    'valuation-damage-survey': 'Valoración o evaluación de daños',
    'general-enquiry': 'Consulta general',
  },
  ru: {
    'pre-purchase-survey': 'Предпокупочный сюрвейерский осмотр',
    'insurance-survey': 'Сюрвейерский осмотр для страхования',
    'buyer-representation': 'Представительство покупателя',
    'yacht-delivery': 'Перегон яхты',
    'valuation-damage-survey': 'Оценка стоимости или ущерба',
    'general-enquiry': 'Общий запрос',
  },
} as const satisfies Record<ContactLocale, Record<ContactService, string>>;

export function getContactServiceOptions(locale: ContactLocale) {
  return Object.entries(contactServiceLabels[locale]).map(([value, label]) => ({
    value: value as ContactService,
    label,
  }));
}

export interface ContactFormCopy {
  eyebrow: string;
  heading: string;
  requiredIntro: string;
  requiredMarker: string;
  honeypot: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    service: string;
    vesselType: string;
    vesselLength: string;
    vesselLocation: string;
    preferredDate: string;
    message: string;
    attachments: string;
  };
  selectService: string;
  vesselTypes: {
    select: string;
    sailing: string;
    motor: string;
    catamaran: string;
    other: string;
  };
  vesselLengthHelp: string;
  vesselLocationPlaceholder: string;
  messageHelp: string;
  attachmentsHelp: string;
  chooseFiles: string;
  noFilesSelected: string;
  selectedFiles: string;
  acknowledgementBefore: string;
  privacyPolicy: string;
  acknowledgementAfter: string;
  privacyLanguageNote: string;
  configurationNotice: string;
  submit: string;
  submitting: string;
  responseNote: string;
  noscriptBefore: string;
  noscriptAfter: string;
  surveyCalculatorSuggestion: string;
  deliveryCalculatorSuggestion: string;
  valuationDamageHelper: string;
  transferred: string;
  surveyEstimate: {
    heading: string;
    intro: string;
    reference: string;
    price: string;
    created: string;
    loa: string;
    vessel: string;
    package: string;
    hull: string;
    location: string;
    discount: string;
    items: string;
    note: string;
    remove: string;
  };
  deliveryEstimate: {
    heading: string;
    intro: string;
    reference: string;
    created: string;
    departure: string;
    destination: string;
    distance: string;
    fee: string;
    yachtType: string;
    lengthBand: string;
    complexity: string;
    timing: string;
    corridor: string;
    note: string;
    remove: string;
  };
}

export const contactFormCopy = {
  en: {
    eyebrow: 'Request a quotation',
    heading: 'Tell Us About Your Requirements',
    requiredIntro: 'Required fields are marked with',
    requiredMarker: 'an asterisk',
    honeypot: 'Leave this field empty',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone or WhatsApp',
      service: 'Service required',
      vesselType: 'Vessel type',
      vesselLength: 'Vessel length',
      vesselLocation: 'Vessel location',
      preferredDate: 'Preferred date',
      message: 'Message',
      attachments: 'Supporting files',
    },
    selectService: 'Select a service',
    vesselTypes: {
      select: 'Select a vessel type',
      sailing: 'Sailing yacht',
      motor: 'Motor yacht',
      catamaran: 'Catamaran',
      other: 'Other or not yet known',
    },
    vesselLengthHelp: 'Approximate length is sufficient.',
    vesselLocationPlaceholder: 'Marina, city and country',
    messageHelp:
      'Include the yacht model, age and any known concerns where available.',
    attachmentsHelp:
      'Up to 3 PDF, JPEG, PNG or WebP files. Maximum 2 MB per file and 3 MB combined. Do not upload identity, payment or other highly sensitive documents.',
    chooseFiles: 'Choose files',
    noFilesSelected: 'No files selected',
    selectedFiles: 'Files selected:',
    acknowledgementBefore: 'I confirm that I have read the',
    privacyPolicy: 'Privacy Policy',
    acknowledgementAfter:
      'and understand how my enquiry information will be handled.',
    privacyLanguageNote: '',
    configurationNotice:
      'The secure form is not configured in this environment. Please use phone, WhatsApp or email instead.',
    submit: 'Send Enquiry',
    submitting: 'Sending…',
    responseNote:
      'Enquiries are normally answered during working hours. Survey availability and final quotations are confirmed individually.',
    noscriptBefore:
      'JavaScript is required for secure verification. Please email',
    noscriptAfter: 'instead.',
    surveyCalculatorSuggestion: 'Calculate an approximate survey cost first',
    deliveryCalculatorSuggestion:
      'Calculate an approximate delivery cost first',
    valuationDamageHelper:
      'Please state whether you require a valuation, damage assessment or a combined assignment.',
    transferred: 'Transferred estimate',
    surveyEstimate: {
      heading: 'Approximate Survey Estimate',
      intro:
        'Review the calculation transferred from the survey calculator before sending your enquiry.',
      reference: 'Estimate reference',
      price: 'Approximate estimate',
      created: 'Created',
      loa: 'Yacht LOA',
      vessel: 'Vessel type',
      package: 'Survey package',
      hull: 'Hull inspection',
      location: 'Yacht location',
      discount: 'Full-package discount',
      items: 'Included inspection items',
      note: 'This estimate is approximate and non-binding. The final scope and quotation require review by All Yacht Service.',
      remove: 'Remove Transferred Estimate',
    },
    deliveryEstimate: {
      heading: 'Approximate Yacht Delivery Estimate',
      intro:
        'Review the route calculation transferred from the delivery calculator before sending your enquiry.',
      reference: 'Estimate reference',
      created: 'Created',
      departure: 'Departure port',
      destination: 'Destination port',
      distance: 'Approximate sea-route distance',
      fee: 'Approximate starting professional fee',
      yachtType: 'Yacht type',
      lengthBand: 'Yacht length band',
      complexity: 'Delivery complexity',
      timing: 'Timing',
      corridor: 'Approximate marine corridor',
      note: 'This route and fee estimate is approximate and non-binding. It is not a navigational route or passage plan. The final scope and quotation require review by All Yacht Service.',
      remove: 'Remove Transferred Estimate',
    },
  },
  es: {
    eyebrow: 'Solicitud de presupuesto',
    heading: 'Cuéntenos qué necesita',
    requiredIntro: 'Los campos obligatorios están marcados con',
    requiredMarker: 'un asterisco',
    honeypot: 'Deje este campo vacío',
    fields: {
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono / WhatsApp',
      service: 'Servicio solicitado',
      vesselType: 'Tipo de embarcación',
      vesselLength: 'Eslora',
      vesselLocation: 'Ubicación del yate',
      preferredDate: 'Fecha preferida',
      message: 'Mensaje',
      attachments: 'Adjuntar archivos',
    },
    selectService: 'Seleccione un servicio',
    vesselTypes: {
      select: 'Seleccione un tipo de embarcación',
      sailing: 'Velero',
      motor: 'Yate a motor',
      catamaran: 'Catamarán',
      other: 'Otro o aún no determinado',
    },
    vesselLengthHelp: 'Una eslora aproximada es suficiente.',
    vesselLocationPlaceholder: 'Puerto deportivo, ciudad y país',
    messageHelp:
      'Incluya el modelo, la antigüedad y cualquier cuestión conocida del yate, si dispone de estos datos.',
    attachmentsHelp:
      'Hasta 3 archivos PDF, JPEG, PNG o WebP. Máximo de 2 MB por archivo y 3 MB en total. No adjunte documentos de identidad, datos de pago ni otra información altamente sensible.',
    chooseFiles: 'Seleccionar archivos',
    noFilesSelected: 'No hay archivos seleccionados',
    selectedFiles: 'Archivos seleccionados:',
    acknowledgementBefore: 'Confirmo que he leído la',
    privacyPolicy: 'Política de privacidad',
    acknowledgementAfter:
      'y comprendo cómo se tratará la información de mi consulta.',
    privacyLanguageNote: '',
    configurationNotice:
      'El formulario seguro no está configurado en este entorno. Contacte por teléfono, WhatsApp o correo electrónico.',
    submit: 'Enviar consulta',
    submitting: 'Enviando…',
    responseNote:
      'La disponibilidad para inspecciones y los presupuestos finales se confirman de forma individual.',
    noscriptBefore:
      'Se necesita JavaScript para la verificación segura. Puede escribir a',
    noscriptAfter: 'en su lugar.',
    surveyCalculatorSuggestion:
      'Calcular primero un coste aproximado de inspección',
    deliveryCalculatorSuggestion:
      'Calcular primero un coste aproximado de entrega',
    valuationDamageHelper:
      'Indique si necesita una valoración, una evaluación de daños o un encargo combinado.',
    transferred: 'Estimación transferida',
    surveyEstimate: {
      heading: 'Estimación aproximada de la inspección',
      intro:
        'Revise el cálculo transferido desde la calculadora antes de enviar su consulta.',
      reference: 'Referencia de la estimación',
      price: 'Estimación aproximada',
      created: 'Creada',
      loa: 'Eslora del yate',
      vessel: 'Tipo de embarcación',
      package: 'Paquete de inspección',
      hull: 'Inspección del casco',
      location: 'Ubicación del yate',
      discount: 'Descuento del paquete completo',
      items: 'Elementos de inspección incluidos',
      note: 'Esta estimación es aproximada y no vinculante. All Yacht Service debe revisar el alcance y preparar el presupuesto final.',
      remove: 'Eliminar estimación',
    },
    deliveryEstimate: {
      heading: 'Estimación aproximada de la entrega del yate',
      intro:
        'Revise el cálculo de la ruta transferido desde la calculadora antes de enviar su consulta.',
      reference: 'Referencia de la estimación',
      created: 'Creada',
      departure: 'Puerto de salida',
      destination: 'Puerto de destino',
      distance: 'Distancia marítima aproximada',
      fee: 'Honorarios profesionales iniciales estimados',
      yachtType: 'Tipo de yate',
      lengthBand: 'Intervalo de eslora',
      complexity: 'Complejidad de la entrega',
      timing: 'Plazo',
      corridor: 'Corredor marítimo aproximado',
      note: 'Esta estimación de ruta y honorarios es aproximada y no vinculante. No es una ruta de navegación ni un plan de travesía. All Yacht Service debe revisar el alcance y preparar el presupuesto final.',
      remove: 'Eliminar estimación',
    },
  },
  ru: {
    eyebrow: 'Запрос расчёта',
    heading: 'Расскажите, что вам требуется',
    requiredIntro: 'Обязательные поля отмечены',
    requiredMarker: 'звёздочкой',
    honeypot: 'Оставьте это поле пустым',
    fields: {
      name: 'Имя',
      email: 'Электронная почта',
      phone: 'Телефон / WhatsApp',
      service: 'Требуемая услуга',
      vesselType: 'Тип судна',
      vesselLength: 'Длина яхты',
      vesselLocation: 'Местонахождение яхты',
      preferredDate: 'Предпочтительная дата',
      message: 'Сообщение',
      attachments: 'Прикрепить файлы',
    },
    selectService: 'Выберите услугу',
    vesselTypes: {
      select: 'Выберите тип судна',
      sailing: 'Парусная яхта',
      motor: 'Моторная яхта',
      catamaran: 'Катамаран',
      other: 'Другой или пока неизвестен',
    },
    vesselLengthHelp: 'Достаточно указать приблизительную длину.',
    vesselLocationPlaceholder: 'Марина, город и страна',
    messageHelp:
      'По возможности укажите модель, возраст яхты и известные вам особенности.',
    attachmentsHelp:
      'До 3 файлов PDF, JPEG, PNG или WebP. Не более 2 МБ на файл и 3 МБ в сумме. Не прикрепляйте документы, удостоверяющие личность, платёжные данные или другую строго конфиденциальную информацию.',
    chooseFiles: 'Выбрать файлы',
    noFilesSelected: 'Файлы не выбраны',
    selectedFiles: 'Выбрано файлов:',
    acknowledgementBefore: 'Подтверждаю, что прочитал(а)',
    privacyPolicy: 'Политику конфиденциальности',
    acknowledgementAfter:
      'и понимаю, как будет обрабатываться информация из моего обращения.',
    privacyLanguageNote: 'В настоящее время доступна на английском языке.',
    configurationNotice:
      'Защищённая форма не настроена в этой среде. Свяжитесь с нами по телефону, WhatsApp или электронной почте.',
    submit: 'Отправить запрос',
    submitting: 'Отправка…',
    responseNote:
      'Доступность услуг и окончательная стоимость подтверждаются индивидуально.',
    noscriptBefore:
      'Для защищённой проверки требуется JavaScript. Вместо формы напишите на',
    noscriptAfter: 'для отправки запроса.',
    surveyCalculatorSuggestion:
      'Сначала рассчитать ориентировочную стоимость осмотра',
    deliveryCalculatorSuggestion:
      'Сначала рассчитать ориентировочную стоимость перегона',
    valuationDamageHelper:
      'Укажите, требуется ли оценка стоимости, оценка ущерба или комплексное задание.',
    transferred: 'Перенесённый расчёт',
    surveyEstimate: {
      heading: 'Ориентировочная стоимость сюрвейерского осмотра',
      intro:
        'Проверьте расчёт, перенесённый из калькулятора, перед отправкой запроса.',
      reference: 'Номер расчёта',
      price: 'Ориентировочная стоимость',
      created: 'Дата расчёта',
      loa: 'Длина яхты',
      vessel: 'Тип судна',
      package: 'Выбранный объём осмотра',
      hull: 'Осмотр корпуса',
      location: 'Местонахождение яхты',
      discount: 'Скидка за полный пакет',
      items: 'Включённые пункты осмотра',
      note: 'Расчёт является ориентировочным и не имеет обязательной силы. Окончательный объём работ и стоимость определяются All Yacht Service после проверки данных.',
      remove: 'Удалить расчёт',
    },
    deliveryEstimate: {
      heading: 'Ориентировочная стоимость перегона яхты',
      intro:
        'Проверьте расчёт маршрута, перенесённый из калькулятора, перед отправкой запроса.',
      reference: 'Номер расчёта',
      created: 'Дата расчёта',
      departure: 'Порт отправления',
      destination: 'Порт назначения',
      distance: 'Ориентировочное расстояние по морскому маршруту',
      fee: 'Ориентировочная начальная стоимость профессионального перегона',
      yachtType: 'Тип яхты',
      lengthBand: 'Диапазон длины яхты',
      complexity: 'Сложность перегона',
      timing: 'Сроки',
      corridor: 'Ориентировочный морской коридор',
      note: 'Расчёт маршрута и стоимости является ориентировочным и не имеет обязательной силы. Он не является навигационным маршрутом или планом перехода. Окончательный объём работ и стоимость определяются All Yacht Service после проверки данных.',
      remove: 'Удалить расчёт',
    },
  },
} as const satisfies Record<ContactLocale, ContactFormCopy>;

export const contactClientCopy = {
  en: {
    locale: 'en-GB',
    metres: 'metres',
    nauticalMiles: 'nautical miles',
    successHeading: 'Enquiry sent',
    successMessage:
      'Thank you. We have received your enquiry and will reply as soon as possible.',
    errorHeading: 'Your enquiry could not be sent',
    errorMessage:
      'Please review the indicated fields and try again. You can also contact us by phone, WhatsApp or email.',
    connectionError:
      'The connection was interrupted. Please try again or contact us by phone, WhatsApp or email.',
    reference: 'Reference',
    errors: {
      name: 'Enter your name using 2 to 100 characters.',
      email: 'Enter a valid email address.',
      phone: 'Enter a valid phone or WhatsApp number.',
      service: 'Select a valid service.',
      vesselType: 'Select a valid vessel type.',
      vesselLength: 'Enter a vessel length between 1 and 99 metres.',
      vesselLocation: 'Use 120 characters or fewer for the location.',
      preferredDate: 'Enter a valid preferred date.',
      message: 'Enter a message using 20 to 5,000 characters.',
      consent:
        'Confirm that you have read the Privacy Policy and understand how your enquiry information will be handled.',
      verification: 'Complete the secure verification before submitting.',
      verificationExpired:
        'The form session has expired. Refresh the page and try again.',
      attachmentsCount: 'Attach no more than 3 files.',
      attachmentsType: 'Use PDF, JPEG, PNG or WebP files only.',
      attachmentsFileSize: 'Each file must be 2 MB or smaller.',
      attachmentsTotalSize:
        'The combined attachment size must be 3 MB or smaller.',
      attachmentsSignature:
        'One or more attachments do not match the selected file type.',
      generic: 'Review this field and try again.',
    },
  },
  es: {
    locale: 'es-ES',
    metres: 'metros',
    nauticalMiles: 'millas náuticas',
    successHeading: 'Consulta enviada',
    successMessage:
      'Gracias. Hemos recibido su consulta y responderemos lo antes posible.',
    errorHeading: 'No se pudo enviar la consulta',
    errorMessage:
      'Revise los campos indicados e inténtelo de nuevo. También puede contactar por teléfono, WhatsApp o correo electrónico.',
    connectionError:
      'Se interrumpió la conexión. Inténtelo de nuevo o contacte por teléfono, WhatsApp o correo electrónico.',
    reference: 'Referencia',
    errors: {
      name: 'Introduzca su nombre con entre 2 y 100 caracteres.',
      email: 'Introduzca una dirección de correo electrónico válida.',
      phone: 'Introduzca un número de teléfono o WhatsApp válido.',
      service: 'Seleccione un servicio válido.',
      vesselType: 'Seleccione un tipo de embarcación válido.',
      vesselLength: 'Introduzca una eslora entre 1 y 99 metros.',
      vesselLocation: 'Utilice un máximo de 120 caracteres para la ubicación.',
      preferredDate: 'Introduzca una fecha preferida válida.',
      message: 'Escriba un mensaje con entre 20 y 5.000 caracteres.',
      consent:
        'Confirme que ha leído la Política de privacidad y comprende cómo se tratará la información de su consulta.',
      verification:
        'Complete la verificación de seguridad antes de enviar la consulta.',
      verificationExpired:
        'La sesión del formulario ha caducado. Actualice la página e inténtelo de nuevo.',
      attachmentsCount: 'Adjunte un máximo de 3 archivos.',
      attachmentsType: 'Utilice únicamente archivos PDF, JPEG, PNG o WebP.',
      attachmentsFileSize: 'Cada archivo debe tener un máximo de 2 MB.',
      attachmentsTotalSize:
        'El tamaño total de los archivos debe ser de 3 MB como máximo.',
      attachmentsSignature:
        'Uno o varios archivos no corresponden al tipo de archivo seleccionado.',
      generic: 'Revise este campo e inténtelo de nuevo.',
    },
  },
  ru: {
    locale: 'ru-RU',
    metres: 'м',
    nauticalMiles: 'морских миль',
    successHeading: 'Запрос отправлен',
    successMessage:
      'Спасибо. Мы получили ваш запрос и ответим в ближайшее время.',
    errorHeading: 'Не удалось отправить запрос',
    errorMessage:
      'Проверьте отмеченные поля и попробуйте ещё раз. Вы также можете связаться с нами по телефону, WhatsApp или электронной почте.',
    connectionError:
      'Соединение было прервано. Попробуйте ещё раз или свяжитесь с нами по телефону, WhatsApp или электронной почте.',
    reference: 'Номер обращения',
    errors: {
      name: 'Введите имя длиной от 2 до 100 символов.',
      email: 'Введите действительный адрес электронной почты.',
      phone: 'Введите действительный номер телефона или WhatsApp.',
      service: 'Выберите действительную услугу.',
      vesselType: 'Выберите действительный тип судна.',
      vesselLength: 'Укажите длину яхты от 1 до 99 метров.',
      vesselLocation: 'Для местонахождения используйте не более 120 символов.',
      preferredDate: 'Укажите действительную предпочтительную дату.',
      message: 'Введите сообщение длиной от 20 до 5 000 символов.',
      consent:
        'Подтвердите, что прочитали Политику конфиденциальности и понимаете, как будет обрабатываться информация из вашего обращения.',
      verification: 'Пройдите защищённую проверку перед отправкой запроса.',
      verificationExpired:
        'Срок действия сеанса формы истёк. Обновите страницу и попробуйте ещё раз.',
      attachmentsCount: 'Прикрепите не более 3 файлов.',
      attachmentsType: 'Допускаются только файлы PDF, JPEG, PNG или WebP.',
      attachmentsFileSize: 'Размер каждого файла не должен превышать 2 МБ.',
      attachmentsTotalSize:
        'Общий размер прикреплённых файлов не должен превышать 3 МБ.',
      attachmentsSignature:
        'Содержимое одного или нескольких файлов не соответствует выбранному типу.',
      generic: 'Проверьте это поле и попробуйте ещё раз.',
    },
  },
} as const;

export const serverErrorMessageKeys = {
  'Enter your name using 2 to 100 characters.': 'name',
  'Enter a valid email address.': 'email',
  'Enter a valid phone or WhatsApp number.': 'phone',
  'Select a valid service.': 'service',
  'Select a valid vessel type.': 'vesselType',
  'Enter a vessel length between 1 and 99 metres.': 'vesselLength',
  'Use 120 characters or fewer for the location.': 'vesselLocation',
  'Enter a valid preferred date.': 'preferredDate',
  'Enter a message using 20 to 5,000 characters.': 'message',
  'Confirm that you have read the Privacy Policy and understand how your enquiry information will be handled.':
    'consent',
  'Complete the secure verification.': 'verification',
  'Complete the secure verification before submitting.': 'verification',
  'The form session has expired. Refresh the page and try again.':
    'verificationExpired',
  'Attach no more than 3 files.': 'attachmentsCount',
  'Use PDF, JPEG, PNG or WebP files only.': 'attachmentsType',
  'Each file must be 2 MB or smaller.': 'attachmentsFileSize',
  'The combined attachment size must be 3 MB or smaller.':
    'attachmentsTotalSize',
  'One or more attachments do not match the selected file type.':
    'attachmentsSignature',
} as const;

export const contactCalculatorCopy = {
  es: {
    survey: {
      vesselType: {
        sailing: 'Velero',
        motor: 'Yate a motor',
      },
      packageType: {
        base: 'Inspección base',
        custom: 'Inspección personalizada',
        full: 'Paquete de inspección completo',
      },
      hullInspection: {
        afloat: 'Inspección a flote',
        'hull-out': 'Inspección con varada',
      },
      items: {
        'Base pre-purchase condition survey':
          'Inspección base del estado previa a la compra',
        'Afloat inspection only': 'Inspección únicamente a flote',
        'Hull-out inspection': 'Inspección con varada',
        'Sea trial': 'Prueba de mar',
        'Engine inspection': 'Inspección del motor',
        'Rigging and sails inspection': 'Inspección del aparejo y las velas',
      },
    },
    delivery: {
      yachtType: {
        sailing: 'Velero',
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
      urgency: {
        standard: 'Planificación estándar',
        urgent: 'Entrega urgente',
      },
    },
  },
  ru: {
    survey: {
      vesselType: {
        sailing: 'Парусная яхта',
        motor: 'Моторная яхта',
      },
      packageType: {
        base: 'Базовый осмотр',
        custom: 'Индивидуальный объём осмотра',
        full: 'Полный пакет осмотра',
      },
      hullInspection: {
        afloat: 'Осмотр на плаву',
        'hull-out': 'Осмотр с подъёмом яхты',
      },
      items: {
        'Base pre-purchase condition survey':
          'Базовый предпокупочный осмотр состояния',
        'Afloat inspection only': 'Осмотр только на плаву',
        'Hull-out inspection': 'Осмотр с подъёмом яхты',
        'Sea trial': 'Ходовые испытания',
        'Engine inspection': 'Осмотр двигателей',
        'Rigging and sails inspection': 'Осмотр такелажа и парусов',
      },
    },
    delivery: {
      yachtType: {
        sailing: 'Парусная яхта',
        motor: 'Моторная яхта',
      },
      lengthBand: {
        small: 'До 12 м',
        medium: 'Более 12 м, до 18 м',
        large: 'Более 18 м, до 24 м',
        xlarge: 'Более 24 м',
      },
      complexity: {
        standard: 'Стандартный перегон по Средиземноморью',
        offshore: 'Дальний или морской переход',
        complex: 'Сложный перегон или маршрут с несколькими формальностями',
      },
      urgency: {
        standard: 'Стандартное планирование',
        urgent: 'Срочный перегон',
      },
    },
  },
} as const;

export const spanishContactPage = {
  title: 'Contacto | All Yacht Service',
  description:
    'Contacte con All Yacht Service para solicitar una inspección de yate, valoración, asistencia al comprador o entrega profesional.',
  pathname: '/es/contact',
  heading: 'Contacte con All Yacht Service',
  eyebrow: 'Consultas y presupuestos',
  summary:
    'Cuéntenos qué tipo de inspección, asistencia técnica o servicio de entrega necesita. Incluya los datos principales del yate y su ubicación para que podamos preparar una respuesta adecuada.',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    { label: 'Contacto', href: '/es/contact' },
  ],
  sidebar: {
    ariaLabel: 'Datos de contacto de All Yacht Service',
    directEyebrow: 'Contacto directo',
    directHeading: 'Hable con All Yacht Service',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    email: 'Correo electrónico',
    officeEyebrow: 'Oficina',
    officeHeading: 'Marina Greenwich, Altea',
    openingHours: 'Lunes–viernes, 09:00–18:00',
    appointments: 'Se recomienda concertar cita.',
    google: 'Ver en Google',
    helpfulEyebrow: 'Datos útiles',
    helpfulHeading: 'Qué información debe incluir',
    whatToInclude: [
      'El servicio que necesita',
      'El tipo, la eslora y la antigüedad del yate, si los conoce',
      'La ubicación actual de la embarcación',
      'Las fechas preferidas para la inspección o entrega',
      'Cualquier formulario de la aseguradora, anuncio o fotografía relevante',
    ],
    servicesEyebrow: 'Información del servicio',
    servicesHeading: 'Consulte el servicio que necesita',
    services: [
      {
        label: 'Inspección precompra',
        href: '/es/pre-purchase-survey',
      },
      {
        label: 'Inspección de condición para seguro',
        href: '/es/insurance-survey',
      },
      {
        label: 'Representación del comprador',
        href: '/es/buyer-representation',
      },
      {
        label: 'Entrega profesional de yates',
        href: '/es/yacht-delivery',
      },
      {
        label: 'Valoración y evaluación de daños',
        href: '/es/valuation-damage-survey',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacidad',
    heading: 'Información de privacidad para consultas',
    first:
      'All Yacht Service utiliza la información enviada mediante este formulario únicamente para revisar su consulta, preparar un presupuesto y comunicarse sobre el servicio solicitado. El formulario está protegido por Cloudflare Turnstile y la consulta se envía a',
    second:
      'No adjunte pasaportes, datos de pago, información médica ni otros documentos altamente sensibles. Consulte la',
    secondAfter:
      'para obtener información sobre las finalidades, bases jurídicas, proveedores, criterios de conservación y sus derechos.',
  },
} as const;

export const russianContactPage = {
  title: 'Контакты | All Yacht Service',
  description:
    'Свяжитесь с All Yacht Service, чтобы запросить сюрвейерский осмотр яхты, оценку стоимости или ущерба, поддержку покупателя или профессиональный перегон.',
  pathname: '/ru/contact',
  heading: 'Связаться с All Yacht Service',
  eyebrow: 'Запросы и расчёты',
  summary:
    'Расскажите, какой сюрвейерский осмотр, техническая поддержка или услуга по перегону яхты вам требуется. Укажите основные данные яхты и её местонахождение, чтобы мы могли подготовить подходящий ответ.',
  breadcrumbs: [
    { label: 'Главная', href: '/ru' },
    { label: 'Контакты', href: '/ru/contact' },
  ],
  sidebar: {
    ariaLabel: 'Контактные данные All Yacht Service',
    directEyebrow: 'Прямой контакт',
    directHeading: 'Связаться с All Yacht Service',
    phone: 'Телефон',
    whatsapp: 'WhatsApp',
    email: 'Электронная почта',
    officeEyebrow: 'Офис',
    officeHeading: 'Marina Greenwich, Альтеа',
    openingHours: 'Понедельник–пятница, 09:00–18:00',
    appointments: 'Рекомендуется предварительная запись.',
    google: 'Посмотреть на Google',
    helpfulEyebrow: 'Полезные сведения',
    helpfulHeading: 'Что указать в запросе',
    whatToInclude: [
      'Требуемую услугу',
      'Тип, длину и возраст яхты, если они известны',
      'Текущее местонахождение судна',
      'Предпочтительные даты осмотра или перегона',
      'Соответствующие формы страховой компании, объявление или фотографии',
    ],
    servicesEyebrow: 'Информация об услугах',
    servicesHeading: 'Выберите нужную услугу',
    services: [
      {
        label: 'Предпокупочный сюрвейерский осмотр',
        href: '/ru/pre-purchase-survey',
      },
      {
        label: 'Сюрвейерский осмотр для страхования',
        href: '/ru/insurance-survey',
      },
      {
        label: 'Представительство покупателя',
        href: '/ru/buyer-representation',
      },
      {
        label: 'Яхты на продажу',
        href: '/ru/yachts-for-sale',
      },
      {
        label: 'Перегон яхт',
        href: '/ru/yacht-delivery',
      },
      {
        label: 'Оценка стоимости и ущерба',
        href: '/ru/valuation-damage-survey',
      },
    ],
  },
  privacy: {
    eyebrow: 'Конфиденциальность',
    heading: 'Обработка данных из запроса',
    first:
      'All Yacht Service использует информацию, отправленную через эту форму, только для рассмотрения вашего запроса, подготовки расчёта и общения по поводу требуемой услуги. Форма защищена Cloudflare Turnstile, а запрос направляется на',
    second:
      'Не прикрепляйте паспорта, платёжные данные, медицинскую информацию или другие строго конфиденциальные документы. Ознакомьтесь с',
    policy: 'Политикой конфиденциальности',
    languageNote: 'В настоящее время доступна на английском языке.',
    secondAfter:
      'В ней описаны цели и правовые основания обработки, поставщики услуг, критерии хранения данных и ваши права.',
  },
} as const;
