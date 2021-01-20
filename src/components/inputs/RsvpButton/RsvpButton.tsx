import React, { useCallback, useState } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { rsvpEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';

type RsvpButtonProps = {
  event: Event;
  onRsvp: () => void;
};

function RsvpButton({ event, onRsvp }: RsvpButtonProps) {
  const account = AuthProviderInstance.account;

  const [hasJoinedEvent, setHasJoinedEvent] = useState(
    account &&
      (event.participants
        ?.map((person) => person.id)
        ?.includes(account.localAccountId) ||
        event.owner?.id === account.localAccountId)
  );

  const handleRsvp = useCallback(async () => {
    await rsvpEvent(event.id);
    setHasJoinedEvent(true); // TODO could have failed
    onRsvp();
  }, [setHasJoinedEvent, event, onRsvp]);

  if (hasJoinedEvent) return null;

  return (
    <Button variant="highlight" onClick={handleRsvp} disabled={account == null}>
      RSVP
    </Button>
  );
}

export default RsvpButton;
