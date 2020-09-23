import React from 'react';

import EventList from './components/EventList';
import { Heading } from './styled';
import { mockEvents } from './mockData';

function LandingPage() {
  return (
    <>
      <Heading>Events near you</Heading>
      <EventList events={mockEvents} />
    </>
  );
}

export default LandingPage;
