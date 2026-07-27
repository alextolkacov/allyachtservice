import {
  deliveryNodes,
  isDeliveryNodeKey,
  isDeliveryPortKey,
  type DeliveryNodeKey,
} from '../../data/calculators/mediterraneanDeliveryRoutes';
import {
  calculateDeliveryEstimate,
  deliveryLabels,
  type DeliveryComplexity,
  type DeliveryUrgency,
  type YachtLengthBand,
  type YachtType,
} from './yachtDelivery';

export const DELIVERY_ESTIMATE_STORAGE_KEY = 'ays:yacht-delivery-estimate:v1';
export const DELIVERY_ESTIMATE_PAYLOAD_VERSION = 1;
export const DELIVERY_ESTIMATE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export interface StoredDeliveryEstimate {
  version: 1;
  reference: string;
  createdAt: string;
  service: 'yacht-delivery';
  source: 'delivery-calculator';
  departurePortKey: DeliveryNodeKey;
  departurePortName: string;
  destinationPortKey: DeliveryNodeKey;
  destinationPortName: string;
  yachtType: YachtType;
  lengthBand: YachtLengthBand;
  complexity: DeliveryComplexity;
  urgency: DeliveryUrgency;
  distanceNm: number;
  estimatedStartingFeeEur: number;
  routePathKeys: DeliveryNodeKey[];
  routeDisplayNames: string[];
}

export type StoredDeliveryEstimateValidation =
  { isValid: true; payload: StoredDeliveryEstimate } | { isValid: false };

const referencePattern = /^AYS-DELIVERY-\d{8}-[A-Z0-9]{4}$/u;
const yachtTypes = new Set<YachtType>(['sailing', 'motor']);
const lengthBands = new Set<YachtLengthBand>([
  'small',
  'medium',
  'large',
  'xlarge',
]);
const complexities = new Set<DeliveryComplexity>([
  'standard',
  'offshore',
  'complex',
]);
const urgencies = new Set<DeliveryUrgency>(['standard', 'urgent']);
const allowedKeys = new Set([
  'version',
  'reference',
  'createdAt',
  'service',
  'source',
  'departurePortKey',
  'departurePortName',
  'destinationPortKey',
  'destinationPortName',
  'yachtType',
  'lengthBand',
  'complexity',
  'urgency',
  'distanceNm',
  'estimatedStartingFeeEur',
  'routePathKeys',
  'routeDisplayNames',
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
    value.length > 0 &&
    value.length <= maximumItems &&
    value.every(
      (item) =>
        typeof item === 'string' &&
        item.length > 0 &&
        item.length <= maximumItemLength,
    )
  );
}

function cleanRouteName(key: DeliveryNodeKey): string {
  return deliveryNodes[key].name.replace(' sea waypoint, Italy', '');
}

export function validateDeliveryEstimatePayload(
  value: unknown,
  expectedReference: string,
  now = Date.now(),
): StoredDeliveryEstimateValidation {
  if (
    !isRecord(value) ||
    Object.keys(value).some((key) => !allowedKeys.has(key))
  ) {
    return { isValid: false };
  }

  if (
    value.version !== DELIVERY_ESTIMATE_PAYLOAD_VERSION ||
    value.service !== 'yacht-delivery' ||
    value.source !== 'delivery-calculator' ||
    typeof value.reference !== 'string' ||
    value.reference.length > 32 ||
    !referencePattern.test(value.reference) ||
    value.reference !== expectedReference ||
    typeof value.createdAt !== 'string' ||
    typeof value.departurePortKey !== 'string' ||
    value.departurePortKey.length > 40 ||
    !isDeliveryPortKey(value.departurePortKey) ||
    typeof value.destinationPortKey !== 'string' ||
    value.destinationPortKey.length > 40 ||
    !isDeliveryPortKey(value.destinationPortKey) ||
    value.departurePortKey === value.destinationPortKey ||
    typeof value.departurePortName !== 'string' ||
    value.departurePortName.length > 120 ||
    value.departurePortName !== deliveryNodes[value.departurePortKey].name ||
    typeof value.destinationPortName !== 'string' ||
    value.destinationPortName.length > 120 ||
    value.destinationPortName !==
      deliveryNodes[value.destinationPortKey].name ||
    typeof value.yachtType !== 'string' ||
    !yachtTypes.has(value.yachtType as YachtType) ||
    typeof value.lengthBand !== 'string' ||
    !lengthBands.has(value.lengthBand as YachtLengthBand) ||
    typeof value.complexity !== 'string' ||
    !complexities.has(value.complexity as DeliveryComplexity) ||
    typeof value.urgency !== 'string' ||
    !urgencies.has(value.urgency as DeliveryUrgency) ||
    typeof value.distanceNm !== 'number' ||
    !Number.isInteger(value.distanceNm) ||
    !Number.isFinite(value.distanceNm) ||
    value.distanceNm <= 0 ||
    value.distanceNm > 20_000 ||
    typeof value.estimatedStartingFeeEur !== 'number' ||
    !Number.isFinite(value.estimatedStartingFeeEur) ||
    value.estimatedStartingFeeEur <= 0 ||
    value.estimatedStartingFeeEur > 1_000_000 ||
    !isBoundedStringArray(value.routePathKeys, 75, 40) ||
    !isBoundedStringArray(value.routeDisplayNames, 75, 120)
  ) {
    return { isValid: false };
  }

  const parsedCreatedAt = new Date(value.createdAt);
  const createdAtTime = parsedCreatedAt.getTime();
  if (
    !Number.isFinite(createdAtTime) ||
    parsedCreatedAt.toISOString() !== value.createdAt ||
    createdAtTime > now + 5 * 60 * 1000 ||
    now - createdAtTime > DELIVERY_ESTIMATE_MAX_AGE_MS ||
    value.reference.slice(13, 21) !==
      parsedCreatedAt.toISOString().slice(0, 10).replaceAll('-', '')
  ) {
    return { isValid: false };
  }

  if (
    value.routePathKeys.some((key) => !isDeliveryNodeKey(key)) ||
    value.routePathKeys[0] !== value.departurePortKey ||
    value.routePathKeys.at(-1) !== value.destinationPortKey
  ) {
    return { isValid: false };
  }

  const pathKeys = value.routePathKeys as DeliveryNodeKey[];
  const routeDisplayNames = value.routeDisplayNames as string[];
  if (
    pathKeys.length !== routeDisplayNames.length ||
    pathKeys.some(
      (key, index) => cleanRouteName(key) !== routeDisplayNames[index],
    )
  ) {
    return { isValid: false };
  }

  const payload = value as unknown as StoredDeliveryEstimate;
  let expected;
  try {
    expected = calculateDeliveryEstimate({
      departurePortKey: payload.departurePortKey,
      destinationPortKey: payload.destinationPortKey,
      yachtType: payload.yachtType,
      lengthBand: payload.lengthBand,
      complexity: payload.complexity,
      urgency: payload.urgency,
    });
  } catch {
    return { isValid: false };
  }

  if (
    expected.route.roundedDistanceNm !== payload.distanceNm ||
    expected.price.estimatedStartingFeeEur !==
      payload.estimatedStartingFeeEur ||
    expected.route.path.length !== payload.routePathKeys.length ||
    expected.route.path.some(
      (key, index) => key !== payload.routePathKeys[index],
    ) ||
    expected.route.displayNames.some(
      (name, index) => name !== payload.routeDisplayNames[index],
    )
  ) {
    return { isValid: false };
  }

  return { isValid: true, payload };
}

export function formatDeliveryEstimatePrice(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDeliveryDistance(value: number): string {
  return `${value.toLocaleString('en-GB')} nautical miles`;
}

export function createDeliveryEstimateSummary(
  payload: StoredDeliveryEstimate,
): string {
  return [
    'Approximate non-binding yacht delivery estimate',
    `Reference: ${payload.reference}`,
    `Created: ${new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(payload.createdAt))}`,
    `Departure: ${payload.departurePortName}`,
    `Destination: ${payload.destinationPortName}`,
    `Approximate sea-route distance: ${formatDeliveryDistance(payload.distanceNm)}`,
    `Estimated starting professional delivery fee: ${formatDeliveryEstimatePrice(payload.estimatedStartingFeeEur)}`,
    `Yacht type: ${deliveryLabels.yachtType[payload.yachtType]}`,
    `Yacht length band: ${deliveryLabels.lengthBand[payload.lengthBand]}`,
    `Delivery complexity: ${deliveryLabels.complexity[payload.complexity]}`,
    `Timing: ${deliveryLabels.urgency[payload.urgency]}`,
    `Approximate marine corridor: ${payload.routeDisplayNames.join(' → ')}`,
    'This estimate is approximate and non-binding. The final delivery scope and quotation require review by All Yacht Service.',
  ].join('\n');
}
