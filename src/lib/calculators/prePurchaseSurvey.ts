/**
 * Pricing logic ported into this repository from:
 * https://github.com/alextolkacov/pys-calculators/blob/5ce07c0123f26fd46bd0dec0896b1c21d67df18a/survey/index.html
 *
 * Source commit: 5ce07c0123f26fd46bd0dec0896b1c21d67df18a
 * Pricing version: survey-2026-07-27
 */

export const PRE_PURCHASE_SURVEY_PRICING_SOURCE = {
  repository: 'https://github.com/alextolkacov/pys-calculators',
  file: 'survey/index.html',
  commit: '5ce07c0123f26fd46bd0dec0896b1c21d67df18a',
  version: 'survey-2026-07-27',
} as const;

export const SURVEY_ESTIMATE_MIN_LOA_METRES = 5;
export const SURVEY_ESTIMATE_MAX_LOA_METRES = 40;
export const FULL_PACKAGE_DISCOUNT_RATE = 0.15;

export type VesselType = 'sailing' | 'motor';
export type SurveyPackage = 'base' | 'custom' | 'full';
export type HullInspection = 'afloat' | 'hull-out';
export type SurveyInspectionOption =
  'sea-trial' | 'engine-inspection' | 'rigging-sails-inspection';
export type SurveyCalculationItemId =
  | 'base-survey'
  | 'afloat-inspection'
  | 'hull-out-inspection'
  | SurveyInspectionOption;

export interface SurveyCalculatorInput {
  loaMetres: number;
  vesselType: VesselType;
  packageType: SurveyPackage;
  hullInspection: HullInspection;
  options: readonly SurveyInspectionOption[];
}

export interface SurveyCalculationItem {
  id: SurveyCalculationItemId;
  label: string;
  priceEur: number;
}

export interface SurveyCalculationResult {
  estimatedPriceEur: number;
  subtotalEur: number;
  packageDiscountEur: number;
  hullInspection: HullInspection;
  activeOptions: readonly SurveyInspectionOption[];
  includedItems: readonly SurveyCalculationItem[];
}

export type SurveyValidationCode =
  | 'missing-or-invalid-loa'
  | 'below-minimum-loa'
  | 'above-maximum-loa'
  | 'invalid-vessel-type'
  | 'invalid-package'
  | 'invalid-hull-inspection'
  | 'invalid-options';

export type SurveyValidationResult =
  | {
      isValid: true;
    }
  | {
      isValid: false;
      code: SurveyValidationCode;
      message: string;
    };

const vesselTypes = new Set<VesselType>(['sailing', 'motor']);
const packageTypes = new Set<SurveyPackage>(['base', 'custom', 'full']);
const hullInspections = new Set<HullInspection>(['afloat', 'hull-out']);
const inspectionOptions = new Set<SurveyInspectionOption>([
  'sea-trial',
  'engine-inspection',
  'rigging-sails-inspection',
]);

export const surveyLabels = {
  vesselType: {
    sailing: 'Sailing yacht',
    motor: 'Motor yacht',
  },
  packageType: {
    base: 'Base Survey',
    custom: 'Custom Survey',
    full: 'Full Inspection Package',
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
} as const;

export function roundToNearest50(value: number): number {
  return Math.round(value / 50) * 50;
}

export function calculateBaseSurveyPrice(
  loaMetres: number,
  vesselType: VesselType,
): number {
  let basePrice: number;

  if (loaMetres <= 7) {
    basePrice = 450;
  } else if (loaMetres <= 12) {
    basePrice = Math.max(550, loaMetres * 60);
  } else if (loaMetres <= 18) {
    basePrice = loaMetres * 70;
  } else if (loaMetres <= 24) {
    basePrice = loaMetres * 85;
  } else {
    basePrice = loaMetres * 105;
  }

  return basePrice * (vesselType === 'sailing' ? 1.05 : 1.1);
}

export function calculateSeaTrialPrice(loaMetres: number): number {
  return Math.max(250, loaMetres * 22);
}

export function calculateEngineInspectionPrice(
  loaMetres: number,
  vesselType: VesselType,
): number {
  return vesselType === 'motor'
    ? Math.max(300, loaMetres * 30)
    : Math.max(180, loaMetres * 16);
}

export function calculateRigInspectionPrice(loaMetres: number): number {
  return Math.max(350, loaMetres * 32);
}

export function calculateHullOutInspectionPrice(loaMetres: number): number {
  return Math.max(220, loaMetres * 22);
}

export function validateSurveyInput(
  input: SurveyCalculatorInput,
): SurveyValidationResult {
  if (!Number.isFinite(input.loaMetres)) {
    return {
      isValid: false,
      code: 'missing-or-invalid-loa',
      message:
        'Please enter the yacht LOA in metres. The minimum LOA for this calculator is 5 metres.',
    };
  }

  if (input.loaMetres < SURVEY_ESTIMATE_MIN_LOA_METRES) {
    return {
      isValid: false,
      code: 'below-minimum-loa',
      message:
        'The calculator is available for yachts from 5 metres. Please contact us for an individual quotation for a smaller vessel.',
    };
  }

  if (input.loaMetres > SURVEY_ESTIMATE_MAX_LOA_METRES) {
    return {
      isValid: false,
      code: 'above-maximum-loa',
      message:
        'For vessels over 40 metres, please contact All Yacht Service for an individual quotation.',
    };
  }

  if (!vesselTypes.has(input.vesselType)) {
    return {
      isValid: false,
      code: 'invalid-vessel-type',
      message: 'Select a valid vessel type.',
    };
  }

  if (!packageTypes.has(input.packageType)) {
    return {
      isValid: false,
      code: 'invalid-package',
      message: 'Select a valid survey package.',
    };
  }

  if (!hullInspections.has(input.hullInspection)) {
    return {
      isValid: false,
      code: 'invalid-hull-inspection',
      message: 'Select a valid hull inspection arrangement.',
    };
  }

  if (
    !Array.isArray(input.options) ||
    input.options.some((option) => !inspectionOptions.has(option))
  ) {
    return {
      isValid: false,
      code: 'invalid-options',
      message: 'Select valid additional inspections.',
    };
  }

  return { isValid: true };
}

export function calculateSurveyEstimate(
  input: SurveyCalculatorInput,
): SurveyCalculationResult {
  const validation = validateSurveyInput(input);
  if (!validation.isValid) {
    throw new RangeError(validation.message);
  }

  const includedItems: SurveyCalculationItem[] = [];
  const basePrice = calculateBaseSurveyPrice(input.loaMetres, input.vesselType);
  let subtotalEur = basePrice;
  let hullInspection = input.hullInspection;
  let activeOptions: SurveyInspectionOption[] = [];

  includedItems.push({
    id: 'base-survey',
    label: surveyLabels.item['base-survey'],
    priceEur: basePrice,
  });

  if (input.packageType === 'full') {
    hullInspection = 'hull-out';
    activeOptions = ['sea-trial', 'engine-inspection'];
    if (input.vesselType === 'sailing') {
      activeOptions.push('rigging-sails-inspection');
    }
  } else if (input.packageType === 'custom') {
    activeOptions = [...new Set(input.options)].filter(
      (option) =>
        option !== 'rigging-sails-inspection' || input.vesselType === 'sailing',
    );
  }

  if (hullInspection === 'hull-out') {
    const priceEur = calculateHullOutInspectionPrice(input.loaMetres);
    subtotalEur += priceEur;
    includedItems.push({
      id: 'hull-out-inspection',
      label: surveyLabels.item['hull-out-inspection'],
      priceEur,
    });
  } else {
    includedItems.push({
      id: 'afloat-inspection',
      label: surveyLabels.item['afloat-inspection'],
      priceEur: 0,
    });
  }

  if (activeOptions.includes('sea-trial')) {
    const priceEur = calculateSeaTrialPrice(input.loaMetres);
    subtotalEur += priceEur;
    includedItems.push({
      id: 'sea-trial',
      label: surveyLabels.item['sea-trial'],
      priceEur,
    });
  }

  if (activeOptions.includes('engine-inspection')) {
    const priceEur = calculateEngineInspectionPrice(
      input.loaMetres,
      input.vesselType,
    );
    subtotalEur += priceEur;
    includedItems.push({
      id: 'engine-inspection',
      label: surveyLabels.item['engine-inspection'],
      priceEur,
    });
  }

  if (activeOptions.includes('rigging-sails-inspection')) {
    const priceEur = calculateRigInspectionPrice(input.loaMetres);
    subtotalEur += priceEur;
    includedItems.push({
      id: 'rigging-sails-inspection',
      label: surveyLabels.item['rigging-sails-inspection'],
      priceEur,
    });
  }

  const rawDiscount =
    input.packageType === 'full' ? subtotalEur * FULL_PACKAGE_DISCOUNT_RATE : 0;

  return {
    estimatedPriceEur: roundToNearest50(subtotalEur - rawDiscount),
    subtotalEur,
    packageDiscountEur: roundToNearest50(rawDiscount),
    hullInspection,
    activeOptions,
    includedItems,
  };
}
