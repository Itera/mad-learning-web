import React, { useCallback } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { deleteEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';
import Modal from 'src/components/Modal';
import ConfirmationModal from 'src/components/Modal/ConfirmationModal';
import { useModal } from 'src/hooks/useModal';

type DeleteButtonProps = {
  event: Event;
  onDelete: () => void;
};

function DeleteButton({ event, onDelete }: DeleteButtonProps) {
  const account = AuthProviderInstance.account;

  const isNotOwner = account && event.owner?.id !== account.localAccountId;

  const { isShown, toggle } = useModal();

  const onConfirm = () => {
    handleDelete();
    toggle();
  };
  const onCancel = toggle;

  const handleDelete = useCallback(async () => {
    await deleteEvent(event.id);
    onDelete();
  }, [event, onDelete]);

  if (isNotOwner) {
    return null;
  }

  return (
    <>
      <Button variant="highlight" onClick={toggle} disabled={account == null}>
        Delete
      </Button>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Confirmation"
        modalContent={
          <ConfirmationModal
            confirmText="DELETE"
            cancelText="CANCEL"
            onConfirm={onConfirm}
            onCancel={onCancel}
            message="Are you sure you want to delete this event?"
          />
        }
      />
    </>
  );
}

export default DeleteButton;
