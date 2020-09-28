import React, { Fragment, ReactNode, ReactHTML } from 'react';

import { Container } from './styled';

type AlertProps = {
  heading: ReactNode;
  description: ReactNode;
  headingAs: keyof ReactHTML;
};

function Alert({ heading, description, headingAs: Heading }: AlertProps) {
  const Content = typeof description === 'string' ? 'p' : Fragment;
  return (
    <Container role="alert">
      <Heading>{heading}</Heading>
      <Content>{description}</Content>
    </Container>
  );
}
Alert.defaultProps = {
  heading: (
    <>
      Something went wrong{' '}
      <span role="img" aria-label="Disappointed face">
        😞
      </span>
    </>
  ),
};

export default Alert;
