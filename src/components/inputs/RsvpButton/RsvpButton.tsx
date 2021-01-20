import React, { useCallback, useState } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { joinEvent, dropEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';

type RsvpButtonProps = {
  event: Event;
  onSuccess?: () => void;
  onError?: (e: Error) => void;
};

function RsvpButton({ event, onSuccess, onError }: RsvpButtonProps) {
  const account = AuthProviderInstance.account;

  const [hasJoinedEvent, setHasJoinedEvent] = useState<boolean>(
    !!account &&
      (event.participants
        ?.map((person) => person.id)
        ?.includes(account.localAccountId) ||
        event.owner?.id === account.localAccountId)
  );

  const handleClick = useCallback(async () => {
    try {
      const hasJoined = await joinOrDropEvent(event.id, hasJoinedEvent);
      setHasJoinedEvent(hasJoined);
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      if (onError) {
        onError(e);
      }
    }
  }, [hasJoinedEvent, setHasJoinedEvent, event, onSuccess, onError]);

  return (
    <Button
      variant="highlight"
      onClick={handleClick}
      disabled={account == null}
    >
      {hasJoinedEvent ? 'Drop' : 'Join'}
    </Button>
  );
}

async function joinOrDropEvent(
  eventId: string,
  hasJoinedEvent: boolean
): Promise<boolean> {
  if (hasJoinedEvent) {
    await joinEvent(eventId);
    return true;
  } else {
    await dropEvent(eventId);
    return false;
  }
}

export default RsvpButton;
