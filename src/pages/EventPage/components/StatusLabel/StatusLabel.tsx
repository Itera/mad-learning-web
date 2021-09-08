import React from 'react';
import { Container, Label, HelpText } from './styled';

type StatusLabelProps = {
  eventStatus: string;
};

function StatusLabel({ eventStatus }: StatusLabelProps) {
  if (eventStatus === 'Draft')
    return (
      <Container>
        <Label color="grey">Draft</Label>
        <HelpText>This event is only visible to you</HelpText>
      </Container>
    );
  else {
    return (
      <Container>
        <Label color="green">Published</Label>
      </Container>
    );
  }
}

export default StatusLabel;
