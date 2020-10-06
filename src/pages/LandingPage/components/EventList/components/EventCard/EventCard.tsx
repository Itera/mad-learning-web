import React, { ReactNode } from 'react';

import { Container, Image, Body, Heading, Content } from './styled';

type EventCardProps = {
  heading: string;
  image: string;
  imageAlt: string;
  content: ReactNode;
};

function EventCard({ heading, content, image, imageAlt }: EventCardProps) {
  return (
    <Container>
      <Image src={image} alt={imageAlt} />
      <Body>
        <Heading as="h2">{heading}</Heading>
        <Content>{content}</Content>
      </Body>
    </Container>
  );
}

export default EventCard;
