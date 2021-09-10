import React from 'react';
import { Container, Label, HelpText } from './styled';
import { EventStatus } from 'src/utils/constants'

type StatusLabelProps = {
  eventStatus: string;
};

function CardStatusLabel({ eventStatus }: StatusLabelProps) {
  if (eventStatus === EventStatus.DRAFT)
    return (
      <Container>
        <Label>
          Draft<HelpText>This event is only visible to you</HelpText>
        </Label>
      </Container>
    );
  else {
    return null;
  }
}

export default CardStatusLabel;
