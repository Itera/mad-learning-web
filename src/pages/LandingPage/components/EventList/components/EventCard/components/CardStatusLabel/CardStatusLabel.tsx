import React from 'react';
import { Container, Label, HelpText } from './styled';

type StatusLabelProps = {
  eventStatus: string;
};

function CardStatusLabel({ eventStatus }: StatusLabelProps) {
  if (eventStatus === 'Draft')
    return (
      <Container>
        <Label color="black">
          Draft<HelpText>This event is only visible to you</HelpText>
        </Label>
      </Container>
    );
  else {
    return null;
  }
}

export default CardStatusLabel;
