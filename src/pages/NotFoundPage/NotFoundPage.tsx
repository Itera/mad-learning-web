import React from 'react';

import { Heading, Content } from './styled';

function NotFoundPage() {
  return (
    <>
      <Heading>Page Not Found</Heading>
      <Content>
        Someone was too eager to deploy{' '}
        <span role="img" aria-label="Face-emoji with mouth covered by hand">
          🤭
        </span>
      </Content>
    </>
  );
}

export default NotFoundPage;
