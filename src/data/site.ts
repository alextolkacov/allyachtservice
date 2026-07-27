export const siteConfig = {
  name: 'All Yacht Service',
  url: 'https://www.allyachtservice.com',
  professionalDescription:
    'Yacht and Small Craft Marine Surveyor with a Yacht & Small Craft Professional Qualification and licensed captain.',
  contact: {
    phone: '+34 695 718 540',
    phoneHref: 'tel:+34695718540',
    whatsapp: '+34 695 718 540',
    whatsappHref: 'https://wa.me/34695718540',
    email: 'info@allyachtservice.com',
    emailHref: 'mailto:info@allyachtservice.com',
  },
  address: {
    formatted:
      'Edificio Timonel, Local 73, Puerto Deportivo Luis Campomanes, Marina Greenwich, 03599 Altea, Alicante, Spain',
    streetAddress:
      'Edificio Timonel, Local 73, Puerto Deportivo Luis Campomanes, Marina Greenwich',
    postalCode: '03599',
    addressLocality: 'Altea',
    addressRegion: 'Alicante',
    addressCountry: 'ES',
  },
  workingHours: {
    label: 'Monday–Friday, 09:00–18:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  social: {
    instagram: 'https://www.instagram.com/allyachtservice/',
    linkedin: 'https://www.linkedin.com/company/all-yacht-service/',
  },
} as const;

export type SiteConfig = typeof siteConfig;
