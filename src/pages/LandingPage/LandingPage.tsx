import React from 'react';

import Alert from '../../components/Alert/';
import EventList from './components/EventList';
import LoadableContent from '../../components/LoadableContent';
import Loader from '../../components/Loader';
import { Heading } from './styled';
import { fetchEvents } from '../../api/events';

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
          <Alert
            heading="Failed to retrieve events"
            description={
              <p>
                You can try refreshing the page again, but please{' '}
                <a href="https://iterano.slack.com/archives/C01AMCX2E7M">
                  contact one of the administrators
                </a>{' '}
                if the issue still persists.
              </p>
            }
            headingAs="h2"
          />
        )}
      />
    </section>
  );
}
export default LandingPage;
