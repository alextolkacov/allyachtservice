export const contactServiceOptions = [
  {
    value: 'pre-purchase-survey',
    label: 'Pre-Purchase Yacht Survey',
  },
  {
    value: 'insurance-survey',
    label: 'Insurance Condition Yacht Survey',
  },
  {
    value: 'buyer-representation',
    label: 'Yacht Buyer Representation',
  },
  {
    value: 'yacht-delivery',
    label: 'Yacht Delivery',
  },
  {
    value: 'valuation-damage-survey',
    label: 'Yacht Valuation or Damage Assessment',
  },
  {
    value: 'general-enquiry',
    label: 'General Enquiry',
  },
] as const;

export type ContactService = (typeof contactServiceOptions)[number]['value'];

interface ContactHrefOptions {
  service?: ContactService;
  source?: string;
  locale?: 'en' | 'es' | 'ru';
}

export function createContactHref(options: ContactHrefOptions = {}): string {
  const search = new URLSearchParams();

  if (options.service) search.set('service', options.service);
  if (options.source) search.set('source', options.source);

  const query = search.toString();
  const pathname =
    options.locale === 'es'
      ? '/es/contact'
      : options.locale === 'ru'
        ? '/ru/contact'
        : '/contact';
  return query ? `${pathname}?${query}` : pathname;
}
