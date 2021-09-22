import React from 'react';

import { ResourceLink } from 'src/types/domain';
import { Container, AttributionLink } from './styled';
import ResourceLinkImage from './ResourceLinkImage/ResourceLinkImage';

type ResourceLinkListProps = {
  resourceLinks?: Array<ResourceLink>;
};

function ResourceLinkList({ resourceLinks }: ResourceLinkListProps) {
  if (!resourceLinks) {
    return (
      <>
        <h2>Links</h2>
        <p>There are no provided links for this event.</p>
      </>
    );
  }

  return (
    <>
      <h2>Links</h2>
      <Container>
        {resourceLinks.map((link) => (
          <li key={link.name}>
            <ResourceLinkImage name={link.name} url={link.url} />
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </Container>
      <AttributionLink href="https://clearbit.com">
        Logos provided by Clearbit
      </AttributionLink>
    </>
  );
}

export default ResourceLinkList;
