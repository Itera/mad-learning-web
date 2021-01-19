import React, { useCallback } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { deleteEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';

type DeleteButtonProps = {
  event: Event;
  onDelete: () => void;
};

function DeleteButton({ event, onDelete }: DeleteButtonProps) {
  const account = AuthProviderInstance.account;

  const isNotOwner = account && event.owner?.id !== account.localAccountId;

  const handleDelete = useCallback(async () => {
    await deleteEvent(event.id);
    onDelete();
  }, [
    event
  ]);

  if (isNotOwner) {
    return null;
  }

  return (
    <Button
      variant="highlight"
      onClick={handleDelete}
      disabled={account == null}
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
