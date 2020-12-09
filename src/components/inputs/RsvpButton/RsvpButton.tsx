import React from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { rsvpEvent } from 'src/api/events';
import { AuthProviderInstance } from 'src/utils/auth';

type RsvpButtonProps = {
  event: Event;
};

function RsvpButton({ event }: RsvpButtonProps) {
  const account = AuthProviderInstance.account;

  const hasJoinedEvent =
    account &&
    event.participants
      ?.map((person) => person.id)
      ?.includes(account.localAccountId);

  const label = hasJoinedEvent ? 'Cancel' : 'Join';

  return (
    <Button
      variant="highlight"
      onClick={() => rsvpEvent(event.id)}
      disabled={account == null}
    >
      {label}
    </Button>
  );
}

export default RsvpButton;
