/**
 * Ported from pys-calculators/yacht-delivery/index.html.
 *
 * Source repository state: 5ce07c0123f26fd46bd0dec0896b1c21d67df18a
 * Delivery implementation commit: 73779c13947d18abe6bc78150de5184ec0b3426e
 * Source-file blob: 3a6e0323717f05df97ea61d457894ea712860b9c
 */

export type DeliveryNodeType = 'port' | 'waypoint';

export interface DeliveryNode {
  readonly name: string;
  readonly lat: number;
  readonly lon: number;
  readonly type: DeliveryNodeType;
}

export const deliveryNodes = {
  altea: {
    name: 'Altea / Marina Greenwich, Spain',
    lat: 38.62,
    lon: -0,
    type: 'port',
  },
  alicante: { name: 'Alicante, Spain', lat: 38.34, lon: -0.48, type: 'port' },
  denia: { name: 'Dénia, Spain', lat: 38.84, lon: 0.11, type: 'port' },
  valencia: { name: 'Valencia, Spain', lat: 39.46, lon: -0.32, type: 'port' },
  castellon: {
    name: 'Castellón, Spain',
    lat: 39.98,
    lon: 0.03,
    type: 'port',
  },
  tarragona: {
    name: 'Tarragona, Spain',
    lat: 41.11,
    lon: 1.25,
    type: 'port',
  },
  barcelona: {
    name: 'Barcelona, Spain',
    lat: 41.35,
    lon: 2.17,
    type: 'port',
  },
  cartagena: {
    name: 'Cartagena, Spain',
    lat: 37.6,
    lon: -0.98,
    type: 'port',
  },
  almeria: { name: 'Almería, Spain', lat: 36.83, lon: -2.46, type: 'port' },
  malaga: { name: 'Málaga, Spain', lat: 36.72, lon: -4.42, type: 'port' },
  gibraltar: { name: 'Gibraltar', lat: 36.14, lon: -5.35, type: 'port' },
  cadiz: { name: 'Cádiz, Spain', lat: 36.53, lon: -6.29, type: 'port' },
  huelva: { name: 'Huelva, Spain', lat: 37.25, lon: -6.95, type: 'port' },
  lagos: { name: 'Lagos, Portugal', lat: 37.1, lon: -8.67, type: 'port' },
  lisbon: { name: 'Lisbon, Portugal', lat: 38.7, lon: -9.16, type: 'port' },
  porto: { name: 'Porto, Portugal', lat: 41.14, lon: -8.65, type: 'port' },
  ibiza: { name: 'Ibiza, Spain', lat: 38.91, lon: 1.43, type: 'port' },
  palma: {
    name: 'Palma de Mallorca, Spain',
    lat: 39.57,
    lon: 2.65,
    type: 'port',
  },
  alcudia: {
    name: 'Alcúdia, Mallorca, Spain',
    lat: 39.85,
    lon: 3.13,
    type: 'port',
  },
  mahon: {
    name: 'Mahón, Menorca, Spain',
    lat: 39.89,
    lon: 4.27,
    type: 'port',
  },
  portvendres: {
    name: 'Port-Vendres, France',
    lat: 42.52,
    lon: 3.11,
    type: 'port',
  },
  marseille: {
    name: 'Marseille, France',
    lat: 43.3,
    lon: 5.37,
    type: 'port',
  },
  toulon: { name: 'Toulon, France', lat: 43.12, lon: 5.93, type: 'port' },
  sainttropez: {
    name: 'Saint-Tropez, France',
    lat: 43.27,
    lon: 6.64,
    type: 'port',
  },
  cannes: { name: 'Cannes, France', lat: 43.55, lon: 7.02, type: 'port' },
  nice: { name: 'Nice, France', lat: 43.7, lon: 7.27, type: 'port' },
  monaco: { name: 'Monaco', lat: 43.73, lon: 7.42, type: 'port' },
  ajaccio: {
    name: 'Ajaccio, Corsica, France',
    lat: 41.92,
    lon: 8.74,
    type: 'port',
  },
  bonifacio: {
    name: 'Bonifacio, Corsica, France',
    lat: 41.39,
    lon: 9.16,
    type: 'port',
  },
  bastia: {
    name: 'Bastia, Corsica, France',
    lat: 42.7,
    lon: 9.45,
    type: 'port',
  },
  genoa: { name: 'Genoa, Italy', lat: 44.41, lon: 8.93, type: 'port' },
  laspezia: {
    name: 'La Spezia, Italy',
    lat: 44.1,
    lon: 9.82,
    type: 'port',
  },
  livorno: { name: 'Livorno, Italy', lat: 43.55, lon: 10.31, type: 'port' },
  civitavecchia: {
    name: 'Civitavecchia / Rome, Italy',
    lat: 42.09,
    lon: 11.79,
    type: 'port',
  },
  ponza: {
    name: 'Ponza sea waypoint, Italy',
    lat: 40.9,
    lon: 12.96,
    type: 'waypoint',
  },
  naples: { name: 'Naples, Italy', lat: 40.84, lon: 14.25, type: 'port' },
  salerno: { name: 'Salerno, Italy', lat: 40.68, lon: 14.76, type: 'port' },
  olbia: {
    name: 'Olbia, Sardinia, Italy',
    lat: 40.92,
    lon: 9.52,
    type: 'port',
  },
  cagliari: {
    name: 'Cagliari, Sardinia, Italy',
    lat: 39.21,
    lon: 9.12,
    type: 'port',
  },
  trapani: {
    name: 'Trapani, Sicily, Italy',
    lat: 38.02,
    lon: 12.51,
    type: 'port',
  },
  palermo: {
    name: 'Palermo, Sicily, Italy',
    lat: 38.12,
    lon: 13.36,
    type: 'port',
  },
  messina: {
    name: 'Messina, Sicily, Italy',
    lat: 38.19,
    lon: 15.56,
    type: 'port',
  },
  catania: {
    name: 'Catania, Sicily, Italy',
    lat: 37.5,
    lon: 15.09,
    type: 'port',
  },
  bari: { name: 'Bari, Italy', lat: 41.13, lon: 16.87, type: 'port' },
  brindisi: {
    name: 'Brindisi, Italy',
    lat: 40.64,
    lon: 17.95,
    type: 'port',
  },
  ancona: { name: 'Ancona, Italy', lat: 43.62, lon: 13.51, type: 'port' },
  venice: { name: 'Venice, Italy', lat: 45.44, lon: 12.33, type: 'port' },
  trieste: { name: 'Trieste, Italy', lat: 45.65, lon: 13.77, type: 'port' },
  valletta: { name: 'Valletta, Malta', lat: 35.9, lon: 14.51, type: 'port' },
  pula: { name: 'Pula, Croatia', lat: 44.87, lon: 13.85, type: 'port' },
  zadar: { name: 'Zadar, Croatia', lat: 44.12, lon: 15.23, type: 'port' },
  split: { name: 'Split, Croatia', lat: 43.51, lon: 16.44, type: 'port' },
  dubrovnik: {
    name: 'Dubrovnik, Croatia',
    lat: 42.65,
    lon: 18.09,
    type: 'port',
  },
  tivat: { name: 'Tivat, Montenegro', lat: 42.43, lon: 18.7, type: 'port' },
  bar: { name: 'Bar, Montenegro', lat: 42.1, lon: 19.09, type: 'port' },
  corfu: { name: 'Corfu, Greece', lat: 39.62, lon: 19.92, type: 'port' },
  lefkas: { name: 'Lefkas, Greece', lat: 38.83, lon: 20.71, type: 'port' },
  patras: { name: 'Patras, Greece', lat: 38.25, lon: 21.73, type: 'port' },
  athens: {
    name: 'Athens / Piraeus, Greece',
    lat: 37.94,
    lon: 23.64,
    type: 'port',
  },
  lavrion: { name: 'Lavrion, Greece', lat: 37.71, lon: 24.06, type: 'port' },
  mykonos: { name: 'Mykonos, Greece', lat: 37.45, lon: 25.33, type: 'port' },
  kos: { name: 'Kos, Greece', lat: 36.89, lon: 27.29, type: 'port' },
  rhodes: { name: 'Rhodes, Greece', lat: 36.45, lon: 28.22, type: 'port' },
  heraklion: {
    name: 'Heraklion, Crete, Greece',
    lat: 35.34,
    lon: 25.14,
    type: 'port',
  },
  istanbul: {
    name: 'Istanbul, Turkey',
    lat: 41.02,
    lon: 28.98,
    type: 'port',
  },
  canakkale: {
    name: 'Çanakkale, Turkey',
    lat: 40.15,
    lon: 26.41,
    type: 'port',
  },
  kusadasi: {
    name: 'Kuşadası, Turkey',
    lat: 37.86,
    lon: 27.26,
    type: 'port',
  },
  bodrum: { name: 'Bodrum, Turkey', lat: 37.03, lon: 27.43, type: 'port' },
  marmaris: {
    name: 'Marmaris, Turkey',
    lat: 36.85,
    lon: 28.27,
    type: 'port',
  },
  gocek: { name: 'Göcek, Turkey', lat: 36.75, lon: 28.94, type: 'port' },
  fethiye: {
    name: 'Fethiye, Turkey',
    lat: 36.62,
    lon: 29.11,
    type: 'port',
  },
  antalya: { name: 'Antalya, Turkey', lat: 36.88, lon: 30.7, type: 'port' },
  limassol: {
    name: 'Limassol, Cyprus',
    lat: 34.67,
    lon: 33.04,
    type: 'port',
  },
  tangier: {
    name: 'Tangier, Morocco',
    lat: 35.78,
    lon: -5.81,
    type: 'port',
  },
  ceuta: { name: 'Ceuta, Spain', lat: 35.89, lon: -5.32, type: 'port' },
} as const satisfies Record<string, DeliveryNode>;

export type DeliveryNodeKey = keyof typeof deliveryNodes;

export interface DeliveryPort extends DeliveryNode {
  readonly key: DeliveryNodeKey;
  readonly type: 'port';
}

export type DeliveryRouteEdge = readonly [
  from: DeliveryNodeKey,
  to: DeliveryNodeKey,
  factor?: number,
];

export const deliveryEdges = [
  ['porto', 'lisbon', 1.08],
  ['lisbon', 'lagos', 1.08],
  ['lagos', 'huelva', 1.08],
  ['huelva', 'cadiz', 1.08],
  ['cadiz', 'gibraltar', 1.08],
  ['gibraltar', 'ceuta', 1.05],
  ['gibraltar', 'tangier', 1.05],
  ['ceuta', 'tangier', 1.05],
  ['gibraltar', 'malaga', 1.1],
  ['malaga', 'almeria', 1.12],
  ['almeria', 'cartagena', 1.12],
  ['cartagena', 'alicante', 1.1],
  ['alicante', 'altea', 1.05],
  ['altea', 'denia', 1.05],
  ['denia', 'valencia', 1.08],
  ['valencia', 'castellon', 1.08],
  ['castellon', 'tarragona', 1.08],
  ['tarragona', 'barcelona', 1.08],
  ['denia', 'ibiza', 1.05],
  ['altea', 'ibiza', 1.05],
  ['valencia', 'ibiza', 1.05],
  ['valencia', 'palma', 1.05],
  ['barcelona', 'palma', 1.05],
  ['barcelona', 'mahon', 1.05],
  ['ibiza', 'palma', 1.05],
  ['palma', 'alcudia', 1.05],
  ['alcudia', 'mahon', 1.05],
  ['palma', 'mahon', 1.05],
  ['barcelona', 'portvendres', 1.08],
  ['portvendres', 'marseille', 1.1],
  ['mahon', 'marseille', 1.08],
  ['mahon', 'toulon', 1.08],
  ['marseille', 'toulon', 1.08],
  ['toulon', 'sainttropez', 1.08],
  ['sainttropez', 'cannes', 1.08],
  ['cannes', 'nice', 1.05],
  ['nice', 'monaco', 1.03],
  ['monaco', 'genoa', 1.08],
  ['mahon', 'bonifacio', 1.08],
  ['marseille', 'ajaccio', 1.08],
  ['toulon', 'ajaccio', 1.08],
  ['nice', 'bastia', 1.08],
  ['ajaccio', 'bonifacio', 1.08],
  ['ajaccio', 'bastia', 1.08],
  ['bastia', 'genoa', 1.08],
  ['bastia', 'livorno', 1.08],
  ['bonifacio', 'olbia', 1.05],
  ['olbia', 'cagliari', 1.1],
  ['mahon', 'cagliari', 1.08],
  ['palma', 'cagliari', 1.08],
  ['genoa', 'laspezia', 1.1],
  ['laspezia', 'livorno', 1.08],
  ['livorno', 'civitavecchia', 1.12],
  ['civitavecchia', 'ponza', 1.05],
  ['ponza', 'naples', 1.05],
  ['naples', 'salerno', 1.05],
  ['salerno', 'messina', 1.12],
  ['civitavecchia', 'olbia', 1.08],
  ['naples', 'palermo', 1.08],
  ['cagliari', 'trapani', 1.08],
  ['cagliari', 'palermo', 1.08],
  ['trapani', 'palermo', 1.08],
  ['palermo', 'messina', 1.1],
  ['messina', 'catania', 1.08],
  ['catania', 'valletta', 1.08],
  ['palermo', 'valletta', 1.08],
  ['valletta', 'cagliari', 1.08],
  ['messina', 'brindisi', 1.1],
  ['valletta', 'brindisi', 1.1],
  ['brindisi', 'bari', 1.08],
  ['bari', 'ancona', 1.1],
  ['ancona', 'venice', 1.1],
  ['venice', 'trieste', 1.08],
  ['trieste', 'pula', 1.08],
  ['pula', 'zadar', 1.1],
  ['zadar', 'split', 1.08],
  ['split', 'dubrovnik', 1.08],
  ['dubrovnik', 'tivat', 1.05],
  ['tivat', 'bar', 1.05],
  ['bar', 'corfu', 1.12],
  ['brindisi', 'corfu', 1.08],
  ['bari', 'dubrovnik', 1.1],
  ['ancona', 'split', 1.1],
  ['corfu', 'lefkas', 1.08],
  ['lefkas', 'patras', 1.08],
  ['patras', 'athens', 1.12],
  ['athens', 'lavrion', 1.05],
  ['lavrion', 'mykonos', 1.05],
  ['athens', 'mykonos', 1.08],
  ['mykonos', 'kos', 1.08],
  ['kos', 'rhodes', 1.08],
  ['athens', 'heraklion', 1.08],
  ['heraklion', 'rhodes', 1.08],
  ['valletta', 'corfu', 1.12],
  ['brindisi', 'patras', 1.08],
  ['rhodes', 'marmaris', 1.05],
  ['kos', 'bodrum', 1.05],
  ['bodrum', 'marmaris', 1.08],
  ['marmaris', 'gocek', 1.08],
  ['gocek', 'fethiye', 1.03],
  ['fethiye', 'antalya', 1.1],
  ['kusadasi', 'bodrum', 1.08],
  ['canakkale', 'kusadasi', 1.12],
  ['istanbul', 'canakkale', 1.12],
  ['mykonos', 'canakkale', 1.12],
  ['rhodes', 'limassol', 1.12],
  ['antalya', 'limassol', 1.08],
  ['heraklion', 'limassol', 1.12],
] as const satisfies readonly DeliveryRouteEdge[];

export const deliveryPorts: readonly DeliveryPort[] = Object.entries(
  deliveryNodes,
).flatMap(([key, node]) =>
  node.type === 'port'
    ? [
        {
          key: key as DeliveryNodeKey,
          name: node.name,
          lat: node.lat,
          lon: node.lon,
          type: 'port' as const,
        },
      ]
    : [],
);

export function isDeliveryNodeKey(value: string): value is DeliveryNodeKey {
  return Object.hasOwn(deliveryNodes, value);
}

export function isDeliveryPortKey(value: string): value is DeliveryNodeKey {
  return isDeliveryNodeKey(value) && deliveryNodes[value].type === 'port';
}
