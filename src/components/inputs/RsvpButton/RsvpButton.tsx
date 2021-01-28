import React, { useCallback, useMemo } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { joinEvent, dropEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';
import { RouteComponentProps } from '@reach/router';

type RsvpButtonProps = {
  event: Event;
  onSuccess?: () => void;
  onError?: (e: Error) => void;
};

function RsvpButton({
  event,
  onSuccess,
  onError,
}: RsvpButtonProps & RouteComponentProps) {
  const account = AuthProviderInstance.account;

  const hasJoinedEvent = useMemo<boolean>(
    () =>
      !!account &&
      (event.participants
        ?.map((person) => person.id)
        ?.includes(account.localAccountId) ||
        event.owner?.id === account.localAccountId),
    [account, event.owner, event.participants]
  );

  const handleClick = useCallback(async () => {
    try {
      await joinOrDropEvent(event.id, hasJoinedEvent);
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      if (onError) {
        onError(e);
      }
    }
  }, [hasJoinedEvent, event, onSuccess, onError]);

  const isOwner = account && event.owner?.id === account.localAccountId;

  if (isOwner) {
    return null;
  }

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
    await dropEvent(eventId);
    return true;
  } else {
    await joinEvent(eventId);
    return false;
  }
}

export default RsvpButton;
