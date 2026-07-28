import type { RouteId } from '../../navigation';
import type { PolicyTocItem } from '../../../i18n/policy';

export interface SpanishPolicyPage {
  title: string;
  description: string;
  heading: string;
  intro: string;
  pathname: string;
  routeId: RouteId;
  toc: readonly PolicyTocItem[];
}
