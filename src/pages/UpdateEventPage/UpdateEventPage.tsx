import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { formatISO } from 'date-fns';

import FailedFetchAlert from 'src/components/FailedFetchAlert';
import LoadableContent from 'src/components/LoadableContent';
import Loader from 'src/components/Loader';
import { UpdateEventWrapper } from './styled';
import { fetchEvent, updateEvent } from 'src/api/events';
import EventForm from 'src/components/EventForm';
import { EventDataOutput } from 'src/components/EventForm/EventForm';

type UpdateEventPageProps = {
  eventId: string;
  '*': string;
};

function UpdateEvent({
  navigate,
  eventId,
  ...rest
}: UpdateEventPageProps & RouteComponentProps) {
  const tmpEventName = rest['*'];

  const handleSubmit = async (eventData: EventDataOutput) => {
    await updateEvent(
      eventId,
      formatISO(eventData.startTime),
      formatISO(eventData.endTime),
      eventData.name,
      eventData.description,
      eventData.eventType,
      eventData.imageUrl,
      eventData.imageAlt,
      eventData.location,
      eventData.teamsUrl,
    );
    navigate!(`/event/${eventId}/${eventData.name}`);
  };

  return (
    <UpdateEventWrapper>
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
          return (
            <EventForm
              onSubmit={handleSubmit}
              headerTitle={'Update new event'}
              submitTitle={'Update'}
              id={event.id}
              startTime={new Date(Date.parse(event.startTime))}
              endTime={new Date(Date.parse(event.endTime))}
              name={event.name}
              description={event.description}
              eventType={event.eventType}
              imageUrl={event.imageUrl}
              imageAlt={event.imageAlt}
              location={event.location}
              teamsUrl={event.teamsUrl}
            />
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
    </UpdateEventWrapper>
  );
}

export default UpdateEvent;
