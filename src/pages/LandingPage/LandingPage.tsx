import React from 'react';

import FailedFetchAlert from 'src/components/FailedFetchAlert';
import EventList from './components/EventList';
import LoadableContent from 'src/components/LoadableContent';
import Loader from 'src/components/Loader';
import { Heading } from './styled';
import { fetchEvents } from 'src/api/events';

function LandingPage() {
  return (
    <section id="landing-page">
      <Heading>Events near you</Heading>
      <LoadableContent
        resolveContent={fetchEvents}
        renderLoading={() => (
          <Loader
            regionId="landing-page"
            progress="Loading events"
            isCentered={true}
          />
        )}
        renderSuccess={(events) => <EventList events={events} />}
        renderError={() => (
          <FailedFetchAlert
            heading="Failed to retrieve events"
            headingAs="h2"
          />
        )}
      />
    </section>
  );
}
export default LandingPage;
