import React from 'react';
import { Event } from 'src/types/domain';
import { updateEvent } from 'src/api/events';
import { EventStatus } from 'src/utils/constants';
import Button from 'src/components/inputs/Button';

type PublishButtonProps = {
  event: Event;
  onPublish: (path: string) => void;
};

function PublishButton({ event, onPublish }: PublishButtonProps) {
  const handlePublish = async (event: Event) => {
    console.log(event);
    await updateEvent(
      event.id,
      event.startTime,
      event.endTime,
      event.name,
      event.description,
      event.eventType,
      event.imageUrl,
      event.imageAlt,
      event.location,
      EventStatus.PUBLISHED,
      event.teamsUrl
    );
    onPublish(`/event/${event.id}/${event.name}`);
  };

  return (
    <Button variant="highlight" onClick={() => handlePublish(event)}>
      Publish
    </Button>
  );
}

export default PublishButton;
