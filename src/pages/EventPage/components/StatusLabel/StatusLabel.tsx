import React from 'react';
import { Container, Label, HelpText } from './styled';
import { EventStatus } from 'src/utils/constants';

type StatusLabelProps = {
  eventStatus: string;
};

function StatusLabel({ eventStatus }: StatusLabelProps) {
  const isDraft = eventStatus === EventStatus.DRAFT;
  const label = isDraft ? 'Draft' : 'Published';
  const color = isDraft ? 'grey' : 'green';
  return (
    <Container>
      <Label color={color}>{label}</Label>
      {isDraft && <HelpText>This event is only visible to you until you publish</HelpText>}
    </Container>
  );
}
export default StatusLabel;
