import React, { useState } from 'react';
import {
  Body,
  BodyDetailsContainer,
  Container,
  DetailItem,
  DetailText,
  Heading,
  Icon,
  Image,
  ImageContainer,
} from './styled';

import calendarIcon from 'src/assets/icons/calendar.svg';
import clockIcon from 'src/assets/icons/clock.svg';
import mapPinIcon from 'src/assets/icons/map-pin.svg';

type EventSummaryProps = {
  eventTitle: string;
  eventDateString: string;
  eventTimeString: string;
  eventLocation: string;
  imageUrl?: string;
  imageAlt?: string;
};

const FALLBACK_IMAGE =
  'https://itera-cdn.azureedge.net/globalassets/6.-newsroom/aktuelt.png?quality=60&Cache=Always&width=1148&mode=crop&scale=both';

export default function EventSummary({
  eventTitle,
  eventDateString,
  eventTimeString,
  eventLocation,
  imageUrl,
  imageAlt,
}: EventSummaryProps) {
  const [hasBrokenImage, setHasBrokenImage] = useState(false);

  const img = hasBrokenImage ? FALLBACK_IMAGE : imageUrl;

  return (
    <Container>
      <ImageContainer>
        <Image
          src={img}
          alt={imageAlt}
          onError={() => setHasBrokenImage(true)}
        />
      </ImageContainer>

      <Body>
        <Heading as="h3">{eventTitle}</Heading>

        <BodyDetailsContainer>
          <DetailItem>
            <Icon src={calendarIcon} alt="Calendar icon" />
            <DetailText>{eventDateString}</DetailText>
          </DetailItem>
          <DetailItem>
            <Icon src={clockIcon} alt="Clock icon" />
            <DetailText>{eventTimeString}</DetailText>
          </DetailItem>
          <DetailItem>
            <Icon src={mapPinIcon} alt="Map pin icon" />
            <DetailText>{eventLocation}</DetailText>
          </DetailItem>
        </BodyDetailsContainer>
      </Body>
    </Container>
  );
}
