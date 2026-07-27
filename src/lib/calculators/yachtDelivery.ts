import {
  deliveryEdges,
  deliveryNodes,
  isDeliveryPortKey,
  type DeliveryNode,
  type DeliveryNodeKey,
} from '../../data/calculators/mediterraneanDeliveryRoutes';

export type YachtType = 'sailing' | 'motor';
export type YachtLengthBand = 'small' | 'medium' | 'large' | 'xlarge';
export type DeliveryComplexity = 'standard' | 'offshore' | 'complex';
export type DeliveryUrgency = 'standard' | 'urgent';

export interface DeliveryCalculatorInput {
  departurePortKey: DeliveryNodeKey;
  destinationPortKey: DeliveryNodeKey;
  yachtType: YachtType;
  lengthBand: YachtLengthBand;
  complexity: DeliveryComplexity;
  urgency: DeliveryUrgency;
}

export interface DeliveryRouteResult {
  distance: number;
  roundedDistanceNm: number;
  path: DeliveryNodeKey[];
  displayNames: string[];
  corridor: string;
}

export interface DeliveryPriceInput {
  distanceNm: number;
  yachtType: YachtType;
  lengthBand: YachtLengthBand;
  complexity: DeliveryComplexity;
  urgency: DeliveryUrgency;
}

export interface DeliveryPriceResult {
  ratePerNm: number;
  complexityMultiplier: number;
  urgencyMultiplier: number;
  unroundedFeeEur: number;
  estimatedStartingFeeEur: number;
}

export interface DeliveryCalculationResult {
  route: DeliveryRouteResult;
  price: DeliveryPriceResult;
}

export type DeliveryValidationResult =
  | { isValid: true }
  | {
      isValid: false;
      field: 'departurePort' | 'destinationPort' | 'route';
      message: string;
    };

export const DELIVERY_BASE_FEE_EUR = 350;
export const DELIVERY_MINIMUM_FEE_EUR = 900;
export const DELIVERY_DEFAULT_EDGE_FACTOR = 1.08;
export const EARTH_RADIUS_NM = 3440.065;

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

const rates: Record<YachtType, Record<YachtLengthBand, number>> = {
  sailing: {
    small: 4,
    medium: 5,
    large: 6.5,
    xlarge: 8,
  },
  motor: {
    small: 5,
    medium: 6.5,
    large: 8,
    xlarge: 10,
  },
};

export const deliveryComplexityMultipliers: Record<DeliveryComplexity, number> =
  {
    standard: 1,
    offshore: 1.15,
    complex: 1.25,
  };

export const deliveryUrgencyMultipliers: Record<DeliveryUrgency, number> = {
  standard: 1,
  urgent: 1.2,
};

export const deliveryLabels = {
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
  urgency: {
    standard: 'Standard planning',
    urgent: 'Urgent delivery',
  },
} as const;

export function normalisePortSearch(value: string): string {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/gu, '')
    .replace(/[^a-z0-9]+/gu, ' ')
    .trim();
}

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function nauticalMiles(a: DeliveryNode, b: DeliveryNode): number {
  const lat1 = toRadians(a.lat);
  const lon1 = toRadians(a.lon);
  const lat2 = toRadians(b.lat);
  const lon2 = toRadians(b.lon);
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  return EARTH_RADIUS_NM * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

interface GraphConnection {
  node: DeliveryNodeKey;
  distance: number;
}

export type DeliveryGraph = Record<DeliveryNodeKey, GraphConnection[]>;

export function buildDeliveryGraph(): DeliveryGraph {
  const keys = Object.keys(deliveryNodes) as DeliveryNodeKey[];
  const graph = Object.fromEntries(
    keys.map((key) => [key, [] as GraphConnection[]]),
  ) as DeliveryGraph;

  deliveryEdges.forEach(([from, to, configuredFactor]) => {
    const factor = configuredFactor || DELIVERY_DEFAULT_EDGE_FACTOR;
    const distance =
      nauticalMiles(deliveryNodes[from], deliveryNodes[to]) * factor;
    graph[from].push({ node: to, distance });
    graph[to].push({ node: from, distance });
  });

  return graph;
}

const deliveryGraph = buildDeliveryGraph();

function routeDisplayName(key: DeliveryNodeKey): string {
  return deliveryNodes[key].name.replace(' sea waypoint, Italy', '');
}

export function formatRouteCorridor(path: readonly DeliveryNodeKey[]): string {
  const names = path.map(routeDisplayName);
  if (names.length <= 10) return names.join(' → ');

  return `${names.slice(0, 5).join(' → ')} → ... → ${names
    .slice(names.length - 5)
    .join(' → ')}`;
}

export function findShortestSeaRoute(
  startKey: DeliveryNodeKey,
  endKey: DeliveryNodeKey,
): DeliveryRouteResult | null {
  const keys = Object.keys(deliveryNodes) as DeliveryNodeKey[];
  const distances = Object.fromEntries(
    keys.map((key) => [key, Number.POSITIVE_INFINITY]),
  ) as Record<DeliveryNodeKey, number>;
  const previous = Object.fromEntries(keys.map((key) => [key, null])) as Record<
    DeliveryNodeKey,
    DeliveryNodeKey | null
  >;
  const visited = new Set<DeliveryNodeKey>();
  distances[startKey] = 0;

  while (true) {
    let current: DeliveryNodeKey | null = null;
    let currentDistance = Number.POSITIVE_INFINITY;

    keys.forEach((key) => {
      if (!visited.has(key) && distances[key] < currentDistance) {
        current = key;
        currentDistance = distances[key];
      }
    });

    if (current === null || current === endKey) break;
    const currentKey = current as DeliveryNodeKey;
    visited.add(currentKey);

    deliveryGraph[currentKey].forEach((edge) => {
      const newDistance = distances[currentKey] + edge.distance;
      if (newDistance < distances[edge.node]) {
        distances[edge.node] = newDistance;
        previous[edge.node] = currentKey;
      }
    });
  }

  if (!Number.isFinite(distances[endKey])) return null;

  const path: DeliveryNodeKey[] = [];
  let step: DeliveryNodeKey | null = endKey;
  while (step) {
    path.unshift(step);
    step = previous[step];
  }

  return {
    distance: distances[endKey],
    roundedDistanceNm: Math.round(distances[endKey]),
    path,
    displayNames: path.map(routeDisplayName),
    corridor: formatRouteCorridor(path),
  };
}

export function getDeliveryRate(
  yachtType: YachtType,
  lengthBand: YachtLengthBand,
): number {
  return rates[yachtType][lengthBand];
}

export function calculateDeliveryStartingFee(
  input: DeliveryPriceInput,
): DeliveryPriceResult {
  if (!Number.isFinite(input.distanceNm) || input.distanceNm <= 0) {
    throw new RangeError('Distance must be a positive finite number.');
  }
  if (
    !yachtTypes.has(input.yachtType) ||
    !lengthBands.has(input.lengthBand) ||
    !complexities.has(input.complexity) ||
    !urgencies.has(input.urgency)
  ) {
    throw new TypeError('Delivery selections are invalid.');
  }

  const ratePerNm = getDeliveryRate(input.yachtType, input.lengthBand);
  const complexityMultiplier = deliveryComplexityMultipliers[input.complexity];
  const urgencyMultiplier = deliveryUrgencyMultipliers[input.urgency];
  const unroundedFeeEur =
    DELIVERY_BASE_FEE_EUR +
    input.distanceNm * ratePerNm * complexityMultiplier * urgencyMultiplier;
  const estimatedStartingFeeEur =
    Math.round(Math.max(unroundedFeeEur, DELIVERY_MINIMUM_FEE_EUR) / 50) * 50;

  return {
    ratePerNm,
    complexityMultiplier,
    urgencyMultiplier,
    unroundedFeeEur,
    estimatedStartingFeeEur,
  };
}

export function validateDeliveryInput(
  input: DeliveryCalculatorInput,
): DeliveryValidationResult {
  if (!isDeliveryPortKey(input.departurePortKey)) {
    return {
      isValid: false,
      field: 'departurePort',
      message: 'Please select a valid departure port from the list.',
    };
  }
  if (!isDeliveryPortKey(input.destinationPortKey)) {
    return {
      isValid: false,
      field: 'destinationPort',
      message: 'Please select a valid destination port from the list.',
    };
  }
  if (input.departurePortKey === input.destinationPortKey) {
    return {
      isValid: false,
      field: 'destinationPort',
      message: 'Departure and destination cannot be the same port.',
    };
  }
  if (
    !yachtTypes.has(input.yachtType) ||
    !lengthBands.has(input.lengthBand) ||
    !complexities.has(input.complexity) ||
    !urgencies.has(input.urgency)
  ) {
    return {
      isValid: false,
      field: 'route',
      message: 'Please review the delivery selections and try again.',
    };
  }

  return { isValid: true };
}

export function calculateDeliveryEstimate(
  input: DeliveryCalculatorInput,
): DeliveryCalculationResult {
  const validation = validateDeliveryInput(input);
  if (!validation.isValid) throw new TypeError(validation.message);

  const route = findShortestSeaRoute(
    input.departurePortKey,
    input.destinationPortKey,
  );
  if (!route) {
    throw new RangeError(
      'No approximate sea route was found for this combination. Please contact us for an individual route quotation.',
    );
  }

  return {
    route,
    price: calculateDeliveryStartingFee({
      distanceNm: route.roundedDistanceNm,
      yachtType: input.yachtType,
      lengthBand: input.lengthBand,
      complexity: input.complexity,
      urgency: input.urgency,
    }),
  };
}
