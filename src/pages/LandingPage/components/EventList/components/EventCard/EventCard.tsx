import React, { ReactNode, useState } from 'react';

import CardStatusLabel from './components/CardStatusLabel';

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
  eventStatus: string;
};

const FALLBACK_IMAGE =
  'https://itera-cdn.azureedge.net/globalassets/6.-newsroom/aktuelt.png?quality=60&Cache=Always&width=1148&mode=crop&scale=both';

function EventCard({
  heading,
  content,
  image,
  imageAlt,
  eventStatus,
}: EventCardProps) {
  const [hasBrokenImage, setHasBrokenImage] = useState(false);

  const img = hasBrokenImage ? FALLBACK_IMAGE : image;

  return (
    <Container>
      <CardStatusLabel eventStatus={eventStatus}></CardStatusLabel>

      <ImageContainer>
        <Image
          src={img}
          alt={imageAlt}
          onError={() => setHasBrokenImage(true)}
        />
      </ImageContainer>
      <Body>
        <Heading as="h2">{heading}</Heading>
        <Content>{content}</Content>
      </Body>
    </Container>
  );
}

export default EventCard;
