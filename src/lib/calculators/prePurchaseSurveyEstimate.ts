import {
  calculateSurveyEstimate,
  surveyLabels,
  type HullInspection,
  type SurveyInspectionOption,
  type SurveyPackage,
  type VesselType,
} from './prePurchaseSurvey';

export const SURVEY_ESTIMATE_STORAGE_KEY =
  'ays:pre-purchase-survey-estimate:v1';
export const SURVEY_ESTIMATE_PAYLOAD_VERSION = 1;
export const SURVEY_ESTIMATE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export interface StoredSurveyEstimate {
  version: 1;
  reference: string;
  createdAt: string;
  service: 'pre-purchase-survey';
  source: 'survey-calculator';
  loaMetres: number;
  vesselType: VesselType;
  packageType: SurveyPackage;
  hullInspection: HullInspection;
  options: SurveyInspectionOption[];
  location: string;
  estimatedPriceEur: number;
  packageDiscountEur: number;
  includedItems: string[];
}

export type StoredSurveyEstimateValidation =
  | {
      isValid: true;
      payload: StoredSurveyEstimate;
    }
  | {
      isValid: false;
    };

const referencePattern = /^AYS-SURVEY-\d{8}-[A-Z0-9]{4}$/u;
const vesselTypes = new Set<VesselType>(['sailing', 'motor']);
const packageTypes = new Set<SurveyPackage>(['base', 'custom', 'full']);
const hullInspections = new Set<HullInspection>(['afloat', 'hull-out']);
const inspectionOptions = new Set<SurveyInspectionOption>([
  'sea-trial',
  'engine-inspection',
  'rigging-sails-inspection',
]);
const allowedKeys = new Set([
  'version',
  'reference',
  'createdAt',
  'service',
  'source',
  'loaMetres',
  'vesselType',
  'packageType',
  'hullInspection',
  'options',
  'location',
  'estimatedPriceEur',
  'packageDiscountEur',
  'includedItems',
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isBoundedStringArray(
  value: unknown,
  maximumItems: number,
  maximumItemLength: number,
): value is string[] {
  return (
    Array.isArray(value) &&
    value.length <= maximumItems &&
    value.every(
      (item) =>
        typeof item === 'string' &&
        item.length > 0 &&
        item.length <= maximumItemLength,
    )
  );
}

export function validateStoredSurveyEstimate(
  value: unknown,
  expectedReference: string,
  now = Date.now(),
): StoredSurveyEstimateValidation {
  if (
    !isRecord(value) ||
    Object.keys(value).some((key) => !allowedKeys.has(key))
  ) {
    return { isValid: false };
  }

  if (
    value.version !== SURVEY_ESTIMATE_PAYLOAD_VERSION ||
    value.service !== 'pre-purchase-survey' ||
    value.source !== 'survey-calculator' ||
    typeof value.reference !== 'string' ||
    !referencePattern.test(value.reference) ||
    value.reference !== expectedReference ||
    typeof value.createdAt !== 'string' ||
    typeof value.loaMetres !== 'number' ||
    !Number.isFinite(value.loaMetres) ||
    value.loaMetres < 5 ||
    value.loaMetres > 40 ||
    typeof value.vesselType !== 'string' ||
    !vesselTypes.has(value.vesselType as VesselType) ||
    typeof value.packageType !== 'string' ||
    !packageTypes.has(value.packageType as SurveyPackage) ||
    typeof value.hullInspection !== 'string' ||
    !hullInspections.has(value.hullInspection as HullInspection) ||
    typeof value.location !== 'string' ||
    value.location.length > 120 ||
    typeof value.estimatedPriceEur !== 'number' ||
    !Number.isFinite(value.estimatedPriceEur) ||
    value.estimatedPriceEur <= 0 ||
    value.estimatedPriceEur > 100_000 ||
    typeof value.packageDiscountEur !== 'number' ||
    !Number.isFinite(value.packageDiscountEur) ||
    value.packageDiscountEur < 0 ||
    value.packageDiscountEur > 100_000 ||
    !isBoundedStringArray(value.options, 3, 40) ||
    !isBoundedStringArray(value.includedItems, 6, 100)
  ) {
    return { isValid: false };
  }

  const parsedCreatedAt = new Date(value.createdAt);
  const createdAtTime = parsedCreatedAt.getTime();
  if (
    !Number.isFinite(createdAtTime) ||
    parsedCreatedAt.toISOString() !== value.createdAt ||
    createdAtTime > now + 5 * 60 * 1000 ||
    now - createdAtTime > SURVEY_ESTIMATE_MAX_AGE_MS
  ) {
    return { isValid: false };
  }

  const referenceDate = value.reference.slice(11, 19);
  if (
    referenceDate !==
    parsedCreatedAt.toISOString().slice(0, 10).replaceAll('-', '')
  ) {
    return { isValid: false };
  }

  if (
    value.options.some(
      (option) => !inspectionOptions.has(option as SurveyInspectionOption),
    ) ||
    new Set(value.options).size !== value.options.length
  ) {
    return { isValid: false };
  }

  const payload = value as unknown as StoredSurveyEstimate;

  if (
    (payload.vesselType === 'motor' &&
      payload.options.includes('rigging-sails-inspection')) ||
    (payload.packageType === 'full' && payload.hullInspection !== 'hull-out') ||
    (payload.packageType !== 'full' && payload.packageDiscountEur !== 0)
  ) {
    return { isValid: false };
  }

  let expectedResult;
  try {
    expectedResult = calculateSurveyEstimate({
      loaMetres: payload.loaMetres,
      vesselType: payload.vesselType,
      packageType: payload.packageType,
      hullInspection: payload.hullInspection,
      options: payload.options,
    });
  } catch {
    return { isValid: false };
  }

  const expectedItems = expectedResult.includedItems.map((item) => item.label);
  if (
    expectedResult.estimatedPriceEur !== payload.estimatedPriceEur ||
    expectedResult.packageDiscountEur !== payload.packageDiscountEur ||
    expectedResult.hullInspection !== payload.hullInspection ||
    expectedResult.activeOptions.length !== payload.options.length ||
    expectedResult.activeOptions.some(
      (option, index) => option !== payload.options[index],
    ) ||
    expectedItems.length !== payload.includedItems.length ||
    expectedItems.some((item, index) => item !== payload.includedItems[index])
  ) {
    return { isValid: false };
  }

  return {
    isValid: true,
    payload,
  };
}

export function formatSurveyEstimatePrice(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function createSurveyEstimateSummary(
  payload: StoredSurveyEstimate,
): string {
  const lines = [
    'Approximate non-binding pre-purchase survey estimate',
    `Reference: ${payload.reference}`,
    `Created: ${new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(payload.createdAt))}`,
    `Estimated professional survey fee: ${formatSurveyEstimatePrice(payload.estimatedPriceEur)}`,
    `Yacht LOA: ${payload.loaMetres.toLocaleString('en-GB', {
      maximumFractionDigits: 1,
    })} metres`,
    `Vessel type: ${surveyLabels.vesselType[payload.vesselType]}`,
    `Survey package: ${surveyLabels.packageType[payload.packageType]}`,
    `Hull inspection: ${surveyLabels.hullInspection[payload.hullInspection]}`,
  ];

  if (payload.location) lines.push(`Yacht location: ${payload.location}`);
  if (payload.packageDiscountEur > 0) {
    lines.push(
      `Full-package discount: ${formatSurveyEstimatePrice(payload.packageDiscountEur)}`,
    );
  }

  lines.push(
    'Included inspections:',
    ...payload.includedItems.map((item) => `- ${item}`),
    'This estimate is approximate and non-binding. The final scope and quotation require review by All Yacht Service.',
  );

  return lines.join('\n');
}
