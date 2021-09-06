import React from 'react';

import { Container } from './styled';

type TeamsLinkProps = {
  teamsUrl: string;
};

function TeamsLink({ teamsUrl }: TeamsLinkProps) {
  return <Container>
            <a href={teamsUrl}>Click here to join Teams meeting</a>
          </Container>;
}

export default TeamsLink;
