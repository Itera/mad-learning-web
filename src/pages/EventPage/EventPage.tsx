import React from 'react';
import { RouteComponentProps } from '@reach/router';

import Alert from '../../components/Alert';
import LoadableContent from '../../components/LoadableContent';
import Loader from '../../components/Loader';
import SplitSection from '../../components/SplitSection';
import MetaInfo from './components/MetaInfo';
import ParticipantList from './components/ParticipantList';
import { fetchEvent } from '../../api/events';

type EventPageProps = {
  eventId: string;
  '*': string;
} & RouteComponentProps;

function EventPage({ eventId, ...rest }: EventPageProps) {
  const tmpEventName = rest['*'];
  return (
    <section id="event-page">
      <LoadableContent
        resolveContent={() => fetchEvent(eventId)}
        renderLoading={() => (
          <>
            <h1>{tmpEventName}</h1>
            <Loader
              regionId="event-page"
              progress="Loading event"
              isCentered={true}
            />
          </>
        )}
        renderSuccess={({
          name,
          description,
          startTime,
          endTime,
          location,
          owner,
          participants,
        }) => (
          <>
            <header>
              <h1>{name}</h1>
              <MetaInfo
                name={name}
                startTime={startTime}
                endTime={endTime}
                location={location}
                owner={owner}
              />
            </header>
            <SplitSection
              leftGrow={8}
              rightGrow={2}
              left={
                <>
                  <h2>Description</h2>
                  <p>{description}</p>
                </>
              }
              right={
                participants && (
                  <ParticipantList participants={participants} collapseAt={3} />
                )
              }
            />
          </>
        )}
        renderError={() => (
          <>
            <h1>{tmpEventName}</h1>
            <Alert
              heading="Failed to retrieve event"
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
          </>
        )}
      />
    </section>
  );
}

export default EventPage;
