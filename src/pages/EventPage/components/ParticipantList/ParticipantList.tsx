import React, { useState } from 'react';

import Button from '../../../../components/Button';
import { Person } from '../../../../types/domain';
import { Container } from './styled';
import { formatPersonName } from '../../../../utils/formatting';

type ParticipantListProps = {
  participants: Array<Person>;
  collapseAt?: number;
};

function ParticipantList({ participants, collapseAt }: ParticipantListProps) {
  const [shouldCollapse, setShouldCollapse] = useState(true);

  if (participants.length === 0) {
    return (
      <>
        <h2>Participants</h2>
        <p>No one has signed up for the event yet.</p>
      </>
    );
  }

  const isCollapsed =
    collapseAt != null &&
    collapseAt > 0 &&
    participants.length > collapseAt &&
    shouldCollapse;

  const listedParticipants = isCollapsed
    ? participants.slice(0, collapseAt)
    : participants;

  return (
    <>
      <h2>Participants ({participants.length})</h2>
      <Container>
        {listedParticipants.map((participant) => (
          <li>{formatPersonName(participant)}</li>
        ))}
      </Container>
      {isCollapsed && (
        <Button onClick={() => setShouldCollapse(false)}>
          Show all participants
        </Button>
      )}
    </>
  );
}

export default ParticipantList;
