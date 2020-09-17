import { RouteComponentProps } from '@reach/router';

import LandingPage from '../pages/LandingPage';
import { ReactComponent } from '../utils/types';

export type Route = {
  path: string;
  label: string;
  component: ReactComponent<RouteComponentProps>;
};

const routes: Array<Route> = [
  {
    path: '/',
    label: 'Landing Page',
    component: LandingPage,
  },
];

export default routes;
