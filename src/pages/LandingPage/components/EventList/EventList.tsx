import React from 'react';
import { Link } from '@reach/router';

import Alert from 'src/components/Alert';
import EventCard from './components/EventCard';
import { Event } from 'src/types/domain';
import {
  GridList,
  GridItem,
  EventInfoList,
  EventInfo,
  DateInfo,
} from './styled';
import { formatDate } from '../../../../utils/formatting';

type EventListProps = {
  events: Array<Event>;
};

function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <Alert
        heading="No ongoing events"
        description="Check again later to see if there are any updates."
        headingAs="h2"
      />
    );
  }

  return (
    <GridList>
      {events.map(({ id, name, startTime, location, imageUrl, imageAlt }) => (
        <GridItem key={id}>
          <Link to={`/event/${id}/${name}`}>
            <EventCard
              heading={name}
              image={imageUrl}
              imageAlt={imageAlt}
              content={
                <EventInfoList>
                  <EventInfo>
                    <DateInfo>{formatDate(startTime, 'MMM d')}</DateInfo> -{' '}
                    {formatDate(startTime, 'HH:mm')} hrs
                  </EventInfo>
                  <EventInfo>{location}</EventInfo>
                </EventInfoList>
              }
            />
          </Link>
        </GridItem>
      ))}
    </GridList>
  );
}

export default EventList;
