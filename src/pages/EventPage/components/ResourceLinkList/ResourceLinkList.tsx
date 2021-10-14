import React from 'react';

import { ResourceLink } from 'src/types/domain';
import { Container, AttributionLink } from './styled';
import ResourceLinkImage from './ResourceLinkImage/ResourceLinkImage';

type ResourceLinkListProps = {
  resourceLinks: Array<ResourceLink>;
};

function ResourceLinkList({ resourceLinks }: ResourceLinkListProps) {
  return (
    <>
      <h2>Links</h2>
      <Container>
        {resourceLinks.map(({ name, url }) => (
          <li key={name}>
            <ResourceLinkImage name={name} url={url} />
            <a href={url}>{name}</a>
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
