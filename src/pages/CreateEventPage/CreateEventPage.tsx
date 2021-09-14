import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { formatISO } from 'date-fns';

import { CreateEventWrapper } from './styled';
import { createEvent } from 'src/api/events';
import { EventDataOutput } from 'src/components/EventForm/EventForm';
import NewEventForm from 'src/components/NewEventForm';

function CreateEvent({ navigate }: RouteComponentProps) {

  const handleSubmit = async (eventData: EventDataOutput) => {
    await createEvent(
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
    navigate!('/');
  };

  return (
    <CreateEventWrapper>
      <NewEventForm
        onSubmit = {handleSubmit}
        headerTitle = "Create new event"
        submitTitle = "Create"
      />
    </CreateEventWrapper>
  );
}

export default CreateEvent;
