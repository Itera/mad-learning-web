import React, { useState, useEffect } from 'react';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { rsvpEvent } from 'src/api/events';
import { useMsal } from 'src/config/auth';

type RsvpButtonProps = {
  event: Event;
};

function RsvpButton({ event }: RsvpButtonProps) {
  const { token } = useMsal();

  const hasJoinedEvent =
    token != null &&
    event.participants
      ?.map((person) => person.id)
      ?.includes(token.account.homeAccountId);

  const label = hasJoinedEvent ? 'Cancel' : 'Join';

  return (
    <Button
      variant="highlight"
      onClick={() => rsvpEvent(event.id)}
      disabled={token == null}
    >
      {label}
    </Button>
  );
}

export default RsvpButton;
