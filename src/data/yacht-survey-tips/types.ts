export interface SurveyTipsImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface SurveyTipsArticle {
  title: string;
  description: string;
  href: string;
  category: string;
  status: string;
  publicationDate: string;
  publicationDateTime: string;
  readingTime: string;
  image: SurveyTipsImage;
}

export interface SurveyTipsCategory {
  title: string;
  description: string;
  futureArticles: readonly string[];
}

export interface SurveyTipContentSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
  closingParagraphs?: readonly string[];
  note?: string;
}

export interface SurveyTipRelatedLink {
  label: string;
  href: string;
}

export interface SurveyTipArticlePageData {
  sourceUrl: string;
  title: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  slug: string;
  pathname: string;
  category: string;
  status: string;
  publicationDate: string;
  publicationDateTime: string;
  modifiedDateTime: string;
  readingTime: string;
  timeRequired: string;
  standfirst: string;
  image: SurveyTipsImage;
  imageCaption: string;
  socialImageAlt: string;
  author: {
    name: string;
    professionalDescription: string;
  };
  breadcrumbs: readonly SurveyTipRelatedLink[];
  introduction: {
    id: string;
    label: string;
    paragraphs: readonly string[];
  };
  sections: readonly SurveyTipContentSection[];
  keyPoint: {
    id: string;
    title: string;
    body: string;
  };
  relatedServices: readonly {
    title: string;
    description: string;
    href: string;
  }[];
  relatedArticles: readonly SurveyTipRelatedLink[];
  finalCta: {
    heading: string;
    body: string;
    links: readonly (SurveyTipRelatedLink & { external?: boolean })[];
  };
  labels: {
    breadcrumb: string;
    published: string;
    readingTime: string;
    author: string;
    authorPrefix: string;
    professionalSupport: string;
    relatedServices: string;
    viewService: string;
    moreTips: string;
    moreTipsBody: string;
    finalCtaEyebrow: string;
  };
  card: SurveyTipsArticle;
}
