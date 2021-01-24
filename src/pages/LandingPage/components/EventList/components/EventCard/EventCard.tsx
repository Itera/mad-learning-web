import React, { ReactNode } from 'react';

import {
  Container,
  Image,
  Body,
  Heading,
  Content,
  ImageContainer,
} from './styled';

type EventCardProps = {
  heading: string;
  image: string;
  imageAlt: string;
  content: ReactNode;
};

function EventCard({ heading, content, image, imageAlt }: EventCardProps) {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={imageAlt} />
      </ImageContainer>
      <Body>
        <Heading as="h2">{heading}</Heading>
        <Content>{content}</Content>
      </Body>
    </Container>
  );
}

export default EventCard;
