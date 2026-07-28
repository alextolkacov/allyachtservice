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
  status: 'Published';
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
