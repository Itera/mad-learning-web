import React, { useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';

import FailedFetchAlert from 'src/components/FailedFetchAlert';
import LoadableContent from 'src/components/LoadableContent';
import Loader from 'src/components/Loader';
import RsvpButton from 'src/components/inputs/RsvpButton';
import SplitSection from 'src/components/SplitSection';
import MetaInfo from './components/MetaInfo';
import ParticipantList from './components/ParticipantList';
import { HighlightedBox } from './styled';
import { fetchEvent } from 'src/api/events';
import DeleteButton from 'src/components/inputs/DeleteButton';
import UpdateButton from 'src/components/inputs/UpdateButton';

type EventPageProps = {
  eventId: string;
  '*': string;
} & RouteComponentProps;

function EventPage({ eventId, navigate, ...rest }: EventPageProps) {
  const tmpEventName = rest['*'];

  const handleDelete = useCallback(() => {
    navigate!('/');
  }, [navigate]);

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
        renderSuccess={(event, refreshEvent) => {
          const {
            name,
            description,
            startTime,
            endTime,
            imageUrl,
            location,
            owner,
            participants,
          } = event;
          return (
            <>
              <header>
                <h1>{name}</h1>
                <HighlightedBox>
                  <MetaInfo
                    name={name}
                    startTime={startTime}
                    endTime={endTime}
                    imageUrl={imageUrl}
                    location={location}
                    owner={owner}
                  />
                  <RsvpButton event={event} onRsvp={refreshEvent} />
                  <DeleteButton event={event} onDelete={handleDelete} />
                  <div style={{ float: 'right' }}>
                    <UpdateButton event={event} onUpdate={handleUpdate} />
                  </div>
                </HighlightedBox>
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
                    <ParticipantList
                      participants={participants}
                      collapseAt={3}
                    />
                  )
                }
              />
            </>
          );
        }}
        renderError={() => (
          <>
            <h1>{tmpEventName}</h1>
            <FailedFetchAlert
              heading="Failed to retrieve event"
              headingAs="h2"
            />
          </>
        )}
      />
    </section>
  );
}

export default EventPage;
