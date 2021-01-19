import React from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { deleteEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';

type DeleteButtonProps = {
  event: Event;
};

function DeleteButton({ event }: DeleteButtonProps) {
  const account = AuthProviderInstance.account;

  const isNotOwner = account && event.owner?.id !== account.localAccountId;

  if (isNotOwner) {
    return null;
  }
  return (
    <Button
      variant="highlight"
      onClick={() => deleteEvent(event.id)}
      disabled={account == null}
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
