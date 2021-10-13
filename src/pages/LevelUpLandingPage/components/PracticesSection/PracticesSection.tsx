import React from 'react';
import { Link, LinkContainer, Section } from './styled';

import { Practices } from './practices';

export default function PracticesSection() {
  return (
    <Section>
      <h2>Role specific training</h2>
      <p>Take a deep dive into our practices</p>

      <LinkContainer>
        {Practices.map((practice) => (
          <Link href={practice.url}>{practice.name}</Link>
        ))}
      </LinkContainer>
    </Section>
  );
}
