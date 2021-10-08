import { subHours } from 'date-fns';
import React from 'react';
import { fetchEvents } from 'src/api/events';
import FailedFetchAlert from 'src/components/FailedFetchAlert';
import LoadableContent from 'src/components/LoadableContent';
import EventSummary from 'src/components/EventSummary';
import Loader from 'src/components/Loader';
import { EventContainer, Link, Section } from './styled';
import { formatDate } from 'src/utils/formatting';

export default function EventSection() {
  return (
    <Section>
      <h2>Upcoming Events</h2>

      <LoadableContent
        resolveContent={() => fetchEvents(subHours(new Date(), 12))}
        renderLoading={() => (
          <Loader
            regionId="landing-page"
            progress="Loading events"
            isCentered={true}
          />
        )}
        renderSuccess={(events) => (
          <EventContainer>
            {events.slice(0, 3).map((event) => (
              <EventSummary
                eventTitle={event.name}
                eventDateString={formatDate(event.startTime, 'MMM d')}
                eventTimeString={formatDate(event.startTime, 'HH:mm')}
                eventLocation={event.location}
                imageUrl={event.imageUrl}
                imageAlt={event.imageAlt}
              />
            ))}
          </EventContainer>
        )}
        renderError={() => (
          <FailedFetchAlert
            heading="Failed to retrieve events"
            headingAs="h2"
          />
        )}
      />

      <Link href="#">See all events</Link>
    </Section>
  );
}
