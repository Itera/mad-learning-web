import { RouteComponentProps } from '@reach/router';

import LandingPage from 'src/pages/LandingPage';
import LevelUpLandingPage from 'src/pages/LevelUpLandingPage';
import CreateEventPage from 'src/pages/CreateEventPage';
import UpdateEventPage from 'src/pages/UpdateEventPage';

import EventPage from 'src/pages/EventPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import { ReactComponent } from 'src/utils/types';
import PracticePage from 'src/pages/PracticePage';

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
    path: '/level-up',
    label: 'Level Up',
    component: LevelUpLandingPage,
  },
  {
    path: '/create-event',
    label: 'Create event',
    component: CreateEventPage,
  },
  {
    path: '/update-event/:eventId/*',
    component: UpdateEventPage,
  },
  {
    path: '/event/:eventId/*',
    component: EventPage,
  },
  {
    path: '/practices',
    component: PracticePage,
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
];

export default routes;
