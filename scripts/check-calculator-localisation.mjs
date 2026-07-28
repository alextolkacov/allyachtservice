import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import process from 'node:process';
import { createServer } from 'vite';

const projectRoot = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8');
const server = await createServer({
  root: projectRoot,
  appType: 'custom',
  logLevel: 'silent',
  server: { middlewareMode: true },
});

try {
  const survey = await server.ssrLoadModule(
    '/src/lib/calculators/prePurchaseSurvey.ts',
  );
  const surveyPayloads = await server.ssrLoadModule(
    '/src/lib/calculators/prePurchaseSurveyEstimate.ts',
  );
  const delivery = await server.ssrLoadModule(
    '/src/lib/calculators/yachtDelivery.ts',
  );
  const deliveryPayloads = await server.ssrLoadModule(
    '/src/lib/calculators/yachtDeliveryEstimate.ts',
  );
  const graph = await server.ssrLoadModule(
    '/src/data/calculators/mediterraneanDeliveryRoutes.ts',
  );
  const presentation = await server.ssrLoadModule('/src/i18n/calculators.ts');

  assert.equal(Object.keys(graph.deliveryNodes).length, 75);
  assert.equal(graph.deliveryEdges.length, 108);
  assert.equal(graph.deliveryPorts.length, 74);
  assert.equal(graph.deliveryNodes.ponza.type, 'waypoint');
  assert(!graph.deliveryPorts.some((port) => port.key === 'ponza'));

  const surveyCases = [
    {
      input: {
        loaMetres: 5,
        vesselType: 'sailing',
        packageType: 'base',
        hullInspection: 'afloat',
        options: [],
      },
      price: 450,
      discount: 0,
    },
    {
      input: {
        loaMetres: 40,
        vesselType: 'motor',
        packageType: 'full',
        hullInspection: 'afloat',
        options: [],
      },
      price: 6450,
      discount: 1150,
    },
    {
      input: {
        loaMetres: 12.5,
        vesselType: 'sailing',
        packageType: 'custom',
        hullInspection: 'hull-out',
        options: ['sea-trial', 'engine-inspection', 'rigging-sails-inspection'],
      },
      price: 2050,
      discount: 0,
    },
    {
      input: {
        loaMetres: 18,
        vesselType: 'motor',
        packageType: 'custom',
        hullInspection: 'hull-out',
        options: ['sea-trial', 'engine-inspection'],
      },
      price: 2700,
      discount: 0,
    },
  ];

  for (const testCase of surveyCases) {
    const englishCanonical = survey.calculateSurveyEstimate(testCase.input);
    const spanishCanonical = survey.calculateSurveyEstimate(testCase.input);
    assert.deepEqual(spanishCanonical, englishCanonical);
    assert.equal(englishCanonical.estimatedPriceEur, testCase.price);
    assert.equal(englishCanonical.packageDiscountEur, testCase.discount);
    assert.match(
      presentation.formatCalculatorCurrency(
        'en',
        englishCanonical.estimatedPriceEur,
      ),
      /€|EUR/u,
    );
    assert.match(
      presentation.formatCalculatorCurrency(
        'es',
        spanishCanonical.estimatedPriceEur,
      ),
      /€|EUR/u,
    );
  }

  assert.equal(
    survey.validateSurveyInput({
      ...surveyCases[0].input,
      loaMetres: 4.9,
    }).code,
    'below-minimum-loa',
  );
  assert.equal(
    survey.validateSurveyInput({
      ...surveyCases[0].input,
      loaMetres: 40.1,
    }).code,
    'above-maximum-loa',
  );

  const deliveryCases = [
    {
      input: {
        departurePortKey: 'altea',
        destinationPortKey: 'alicante',
        yachtType: 'sailing',
        lengthBand: 'small',
        complexity: 'standard',
        urgency: 'standard',
      },
      distance: 30,
      fee: 900,
      usesPonza: false,
    },
    {
      input: {
        departurePortKey: 'barcelona',
        destinationPortKey: 'marseille',
        yachtType: 'motor',
        lengthBand: 'medium',
        complexity: 'standard',
        urgency: 'urgent',
      },
      distance: 209,
      fee: 2000,
      usesPonza: false,
    },
    {
      input: {
        departurePortKey: 'lisbon',
        destinationPortKey: 'istanbul',
        yachtType: 'sailing',
        lengthBand: 'large',
        complexity: 'offshore',
        urgency: 'standard',
      },
      distance: 2443,
      fee: 18600,
      usesPonza: false,
    },
    {
      input: {
        departurePortKey: 'altea',
        destinationPortKey: 'athens',
        yachtType: 'motor',
        lengthBand: 'xlarge',
        complexity: 'complex',
        urgency: 'urgent',
      },
      distance: 1361,
      fee: 20750,
      usesPonza: false,
    },
    {
      input: {
        departurePortKey: 'civitavecchia',
        destinationPortKey: 'naples',
        yachtType: 'sailing',
        lengthBand: 'medium',
        complexity: 'standard',
        urgency: 'standard',
      },
      distance: 155,
      fee: 1150,
      usesPonza: true,
    },
  ];

  for (const testCase of deliveryCases) {
    const englishCanonical = delivery.calculateDeliveryEstimate(testCase.input);
    const spanishCanonical = delivery.calculateDeliveryEstimate(testCase.input);
    assert.deepEqual(spanishCanonical, englishCanonical);
    assert.equal(englishCanonical.route.roundedDistanceNm, testCase.distance);
    assert.equal(englishCanonical.price.estimatedStartingFeeEur, testCase.fee);
    assert.equal(
      englishCanonical.route.path.includes('ponza'),
      testCase.usesPonza,
    );
  }

  const samePortValidation = delivery.validateDeliveryInput({
    ...deliveryCases[0].input,
    destinationPortKey: 'altea',
  });
  assert.equal(samePortValidation.isValid, false);
  assert.equal(samePortValidation.field, 'destinationPort');

  const createdAt = new Date('2026-07-28T10:00:00.000Z');
  const surveyInput = surveyCases[2].input;
  const surveyResult = survey.calculateSurveyEstimate(surveyInput);
  const surveyReference = 'AYS-SURVEY-20260728-AB12';
  const surveyPayload = {
    version: 1,
    reference: surveyReference,
    createdAt: createdAt.toISOString(),
    service: 'pre-purchase-survey',
    source: 'survey-calculator',
    loaMetres: surveyInput.loaMetres,
    vesselType: surveyInput.vesselType,
    packageType: surveyInput.packageType,
    hullInspection: surveyResult.hullInspection,
    options: [...surveyResult.activeOptions],
    location: 'Altea, Spain',
    estimatedPriceEur: surveyResult.estimatedPriceEur,
    packageDiscountEur: surveyResult.packageDiscountEur,
    includedItems: surveyResult.includedItems.map((item) => item.label),
  };
  assert.equal(
    surveyPayloads.validateStoredSurveyEstimate(
      surveyPayload,
      surveyReference,
      createdAt.getTime(),
    ).isValid,
    true,
  );
  assert.equal(
    surveyPayloads.validateStoredSurveyEstimate(
      {
        ...surveyPayload,
        estimatedPriceEur: surveyPayload.estimatedPriceEur + 50,
      },
      surveyReference,
      createdAt.getTime(),
    ).isValid,
    false,
  );
  assert.equal(
    surveyPayloads.validateStoredSurveyEstimate(
      surveyPayload,
      'AYS-SURVEY-20260728-ZZ99',
      createdAt.getTime(),
    ).isValid,
    false,
  );
  assert.equal(
    surveyPayloads.validateStoredSurveyEstimate(
      surveyPayload,
      surveyReference,
      createdAt.getTime() + surveyPayloads.SURVEY_ESTIMATE_MAX_AGE_MS + 1,
    ).isValid,
    false,
  );

  const deliveryInput = deliveryCases[4].input;
  const deliveryResult = delivery.calculateDeliveryEstimate(deliveryInput);
  const deliveryReference = 'AYS-DELIVERY-20260728-AB12';
  const deliveryPayload = {
    version: 1,
    reference: deliveryReference,
    createdAt: createdAt.toISOString(),
    service: 'yacht-delivery',
    source: 'delivery-calculator',
    departurePortKey: deliveryInput.departurePortKey,
    departurePortName: graph.deliveryNodes[deliveryInput.departurePortKey].name,
    destinationPortKey: deliveryInput.destinationPortKey,
    destinationPortName:
      graph.deliveryNodes[deliveryInput.destinationPortKey].name,
    yachtType: deliveryInput.yachtType,
    lengthBand: deliveryInput.lengthBand,
    complexity: deliveryInput.complexity,
    urgency: deliveryInput.urgency,
    distanceNm: deliveryResult.route.roundedDistanceNm,
    estimatedStartingFeeEur: deliveryResult.price.estimatedStartingFeeEur,
    routePathKeys: [...deliveryResult.route.path],
    routeDisplayNames: [...deliveryResult.route.displayNames],
  };
  assert.equal(
    deliveryPayloads.validateDeliveryEstimatePayload(
      deliveryPayload,
      deliveryReference,
      createdAt.getTime(),
    ).isValid,
    true,
  );
  for (const modified of [
    {
      ...deliveryPayload,
      distanceNm: deliveryPayload.distanceNm + 1,
    },
    {
      ...deliveryPayload,
      estimatedStartingFeeEur: deliveryPayload.estimatedStartingFeeEur + 50,
    },
    {
      ...deliveryPayload,
      routePathKeys: deliveryPayload.routePathKeys.slice(0, -1),
    },
  ]) {
    assert.equal(
      deliveryPayloads.validateDeliveryEstimatePayload(
        modified,
        deliveryReference,
        createdAt.getTime(),
      ).isValid,
      false,
    );
  }
  assert.equal(
    deliveryPayloads.validateDeliveryEstimatePayload(
      deliveryPayload,
      'AYS-DELIVERY-20260728-ZZ99',
      createdAt.getTime(),
    ).isValid,
    false,
  );
  assert.equal(
    deliveryPayloads.validateDeliveryEstimatePayload(
      deliveryPayload,
      deliveryReference,
      createdAt.getTime() + deliveryPayloads.DELIVERY_ESTIMATE_MAX_AGE_MS + 1,
    ).isValid,
    false,
  );

  assert.equal(
    surveyPayloads.SURVEY_ESTIMATE_STORAGE_KEY,
    'ays:pre-purchase-survey-estimate:v1',
  );
  assert.equal(
    deliveryPayloads.DELIVERY_ESTIMATE_STORAGE_KEY,
    'ays:yacht-delivery-estimate:v1',
  );
  assert.equal(surveyPayloads.SURVEY_ESTIMATE_PAYLOAD_VERSION, 1);
  assert.equal(deliveryPayloads.DELIVERY_ESTIMATE_PAYLOAD_VERSION, 1);

  const spanishSources = [
    'src/data/es/pre-purchase-survey-calculator.ts',
    'src/data/es/yacht-delivery-calculator.ts',
    'src/pages/es/pre-purchase-survey-calculator.astro',
    'src/pages/es/yacht-delivery-calculator.astro',
    'src/i18n/calculators.ts',
  ]
    .map(read)
    .join('\n');
  assert(!spanishSources.includes('deliveryEdges ='));
  assert(!spanishSources.includes('const rates:'));
  assert(!spanishSources.includes('FULL_PACKAGE_DISCOUNT_RATE ='));

  const surveyComponent = read(
    'src/components/PrePurchaseSurveyCalculator.astro',
  );
  const deliveryComponent = read(
    'src/components/YachtDeliveryCalculator.astro',
  );
  assert(surveyComponent.includes('calculateSurveyEstimate'));
  assert(surveyComponent.includes('SURVEY_ESTIMATE_STORAGE_KEY'));
  assert(deliveryComponent.includes('calculateDeliveryEstimate'));
  assert(deliveryComponent.includes('DELIVERY_ESTIMATE_STORAGE_KEY'));

  process.stdout.write(
    'Calculator localisation regression passed: 4 survey cases, 5 delivery routes, EN/ES canonical equality, graph invariants, and payload tamper/expiry/reference checks.\n',
  );
} finally {
  await server.close();
}
