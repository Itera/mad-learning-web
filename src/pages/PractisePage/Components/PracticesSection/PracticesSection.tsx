import React from 'react';
import { Link, LinkContainer, Section } from './styled';

import { Practices } from './practices';

export default function PracticesSection() {
  return (
    <Section>
      <LinkContainer>
        {Practices.map((practice) => (
          <Link href={practice.url}>{practice.name}</Link>
        ))}
      </LinkContainer>
    </Section>
  );
}
