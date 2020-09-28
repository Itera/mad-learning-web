import { RouteComponentProps } from '@reach/router';

import LandingPage from '../pages/LandingPage';
import CreateEventPage from '../pages/CreateEventPage/CreateEventPage'
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
  {
    path: '/create-event',
    label: 'Create event',
    component: CreateEventPage,
  },
];

export default routes;
