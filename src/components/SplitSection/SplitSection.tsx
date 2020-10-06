import React, { ReactNode, ComponentProps } from 'react';

import { Container, Section } from './styled';

type SplitSectionProps = {
  left: ReactNode;
  right: ReactNode;
  leftGrow: number;
  rightGrow: number;
  containerAs: ComponentProps<typeof Container>['as'];
  sectionAs: ComponentProps<typeof Section>['as'];
};

function SplitSection({
  left,
  right,
  leftGrow,
  rightGrow,
  containerAs,
  sectionAs,
}: SplitSectionProps) {
  return (
    <Container as={containerAs}>
      <Section as={sectionAs} grow={leftGrow}>
        {left}
      </Section>
      <Section as={sectionAs} grow={rightGrow}>
        {right}
      </Section>
    </Container>
  );
}
SplitSection.defaultProps = {
  leftGrow: 1,
  rightGrow: 1,
  containerAs: 'div',
  sectionAs: 'div',
};

export default SplitSection;
