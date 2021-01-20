import React, { useCallback } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { updateEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';

type UpdateButtonProps = {
  event: Event;
  onUpdate: () => void;
};

function UpdateButton({ event, onUpdate }: UpdateButtonProps) {
  const account = AuthProviderInstance.account;

  const isNotOwner = account && event.owner?.id !== account.localAccountId;

  const handleUpdate = useCallback(async () => {
    await updateEvent(event.id);
    onUpdate();
  }, [event, onUpdate]);
  if (isNotOwner) {
    return null;
  }

  return (
    <Button
      variant="highlight"
      onClick={handleUpdate}
      disabled={account == null}
    >
      Update
    </Button>
  );
}

export default UpdateButton;
