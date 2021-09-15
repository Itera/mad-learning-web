import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { formatISO } from 'date-fns';

import { CreateEventWrapper } from './styled';
import { createEvent } from 'src/api/events';
import EventForm from 'src/components/EventForm';
import { EventDataOutput } from 'src/components/EventForm/EventForm';

function CreateEvent({ navigate }: RouteComponentProps) {
  const handleSubmit = async (eventData: EventDataOutput) => {
    const response = await createEvent(
      formatISO(eventData.startTime),
      formatISO(eventData.endTime),
      eventData.name,
      eventData.description,
      eventData.imageUrl,
      eventData.imageAlt,
      eventData.location,
      eventData.eventType,
      eventData.eventStatus,
      eventData.teamsUrl,
    );
    navigate!(`/event/${response.id}/${response.name}`);
  };

  return (
    <CreateEventWrapper>
      <EventForm
        onSubmit={handleSubmit}
        headerTitle={'Create new event'}
        submitTitle={'Create'}
      />
    </CreateEventWrapper>
  );
}

export default CreateEvent;
