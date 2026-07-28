export interface LocalizedLinkPart {
  text: string;
  href: string;
  lang?: string;
  languageNote?: string;
}

export type LocalizedRichText =
  string | readonly (string | LocalizedLinkPart)[];

export interface LocalizedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface LocalizedCard {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  lang?: string;
  languageNote?: string;
}

export interface LocalizedProcessStep {
  title: string;
  description: string;
}

export type LocalizedContentBlock =
  | {
      type: 'paragraph';
      content: LocalizedRichText;
      style?: 'note';
    }
  | {
      type: 'cards';
      items: readonly LocalizedCard[];
      className?: string;
    }
  | {
      type: 'list';
      items: readonly LocalizedRichText[];
      style: 'check' | 'defect';
    }
  | {
      type: 'process';
      steps: readonly LocalizedProcessStep[];
    }
  | {
      type: 'figure';
      image: LocalizedImage;
    }
  | {
      type: 'profile';
      paragraphs: readonly LocalizedRichText[];
      areas: readonly string[];
      closing: string;
      image: LocalizedImage;
    }
  | {
      type: 'office';
      introduction: string;
      addressHeading: string;
      hoursHeading: string;
      hours: string;
      appointments: string;
      callLabel: string;
      whatsappLabel: string;
      emailLabel: string;
      googleLabel: string;
    };

export interface LocalizedContentSection {
  id: string;
  heading: string;
  blocks: readonly LocalizedContentBlock[];
}

export interface LocalizedToolSection {
  id: string;
  type: 'tool';
  eyebrow?: string;
  heading: string;
  description: string;
  link: {
    label: string;
    href: string;
    languageNote?: string;
    analyticsEvent?: string;
  };
}

export type LocalizedSection = LocalizedContentSection | LocalizedToolSection;
