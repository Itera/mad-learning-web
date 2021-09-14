import React from 'react';
import { Event } from 'src/types/domain';
import { updateEvent } from 'src/api/events';
import { EventStatus } from 'src/utils/constants';
import Button from 'src/components/inputs/Button';
import Modal from 'src/components/Modal';
import ConfirmationModal from 'src/components/Modal/ConfirmationModal';
import { useModal } from 'src/hooks/useModal';

type PublishButtonProps = {
  event: Event;
  onPublish: (path: string) => void;
};

function PublishButton({ event, onPublish }: PublishButtonProps) {
  const { isShown, toggle } = useModal();

  const onConfirm = () => {
    handlePublish(event);
    toggle();
  };
  const onCancel = () => toggle();

  const handlePublish = async (event: Event) => {
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
    <>
      <Button variant="highlight" onClick={toggle}>
        Publish
      </Button>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Confirmation"
        modalContent={
          <ConfirmationModal
            onConfirm={onConfirm}
            onCancel={onCancel}
            message="Are you sure you want to publish this event? This action is not reversible and a slack message will be posted in #fagkvelder-norge"
          />
        }
      />
    </>
  );
}

export default PublishButton;
