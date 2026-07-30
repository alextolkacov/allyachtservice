import type { PolicyTocItem } from '../../../i18n/policy';
import type { RouteId } from '../../navigation';

export interface RussianPolicyPage {
  title: string;
  description: string;
  heading: string;
  intro: string;
  pathname: string;
  routeId: RouteId;
  toc: readonly PolicyTocItem[];
}
