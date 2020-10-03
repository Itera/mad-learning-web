import { RouteComponentProps } from '@reach/router';

import LandingPage from '../pages/LandingPage';
import CreateEventPage from '../pages/CreateEventPage';
import EventPage from '../pages/EventPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ReactComponent } from '../utils/types';

export type Route<P extends RouteComponentProps> = {
  path: string;
  label?: string;
  component: ReactComponent<P>;
};

const routes: Array<Route<any>> = [
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
  {
    path: '/event/:eventId/*',
    component: EventPage,
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
];

export default routes;
