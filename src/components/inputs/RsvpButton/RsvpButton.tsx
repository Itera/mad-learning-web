import React, { useState, useEffect } from 'react';
import { IdToken } from 'msal/lib-commonjs/IdToken';

import Button from 'src/components/inputs/Button';
import { Event } from 'src/types/domain';
import { rsvpEvent } from 'src/api/events';
import Authentication from 'src/config/auth';

type RsvpButtonProps = {
  event: Event;
};

function RsvpButton({ event }: RsvpButtonProps) {
  const [token, setToken] = useState<IdToken | null>(null);

  useEffect(() => {
    Authentication.getIdToken().then(({ idToken }) => setToken(idToken));
  }, []);

  const hasJoinedEvent =
    token != null &&
    event.participants
      ?.map((person) => person.id)
      ?.includes(token.claims['id']);

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
