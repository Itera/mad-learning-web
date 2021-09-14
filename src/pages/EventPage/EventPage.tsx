import React, { useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';

import CommentSection from 'src/components/Comment/CommentSection';
import FailedFetchAlert from 'src/components/FailedFetchAlert';
import LoadableContent from 'src/components/LoadableContent';
import Loader from 'src/components/Loader';
import RsvpButton from 'src/components/inputs/RsvpButton';
import SplitSection from 'src/components/SplitSection';
import MetaInfo from './components/MetaInfo';
import ParticipantList from './components/ParticipantList';
import StatusLabel from './components/StatusLabel';
import TeamsLink from './components/TeamsLink';
import { DescriptionText, HighlightedBox } from './styled';
import { fetchEvent } from 'src/api/events';
import DeleteButton from 'src/components/inputs/DeleteButton';
import Button from 'src/components/inputs/Button';
import { AuthProviderInstance } from 'src/utils/auth';

type EventPageProps = {
  eventId: string;
  '*': string;
} & RouteComponentProps;

function EventPage({ eventId, navigate, ...rest }: EventPageProps) {
  const tmpEventName = rest['*'];

  const handleDelete = useCallback(() => {
    navigate!('/');
  }, [navigate]);

  return (
    <section id="event-page">
      <LoadableContent
        resolveContent={() => fetchEvent(eventId)}
        renderLoading={() => (
          <>
            <h1>{tmpEventName}</h1>
            <Loader
              regionId="event-page"
              progress="Loading event"
              isCentered={true}
            />
          </>
        )}
        renderSuccess={(event, refreshEvent) => {
          const {
            name,
            description,
            startTime,
            endTime,
            imageUrl,
            location,
            owner,
            participants,
            eventStatus,
            teamsUrl,
            comments,
          } = event;

          const account = AuthProviderInstance.account;

          const isNotOwner =
            !owner || !account || account.localAccountId !== owner.id;

          return (
            <>
              <header>
                <h1>{name}</h1>
                {!isNotOwner && <StatusLabel eventStatus={eventStatus} />}
                <HighlightedBox>
                  <MetaInfo
                    name={name}
                    startTime={startTime}
                    endTime={endTime}
                    imageUrl={imageUrl}
                    location={location}
                    owner={owner}
                  />
                  <RsvpButton event={event} onSuccess={refreshEvent} />
                  <DeleteButton event={event} onDelete={handleDelete} />
                  {!isNotOwner && (
                    <Button
                      variant="highlight"
                      onClick={() =>
                        navigate!(`/update-event/${event.id}/${name}`)
                      }
                    >
                      Edit
                    </Button>
                  )}
                </HighlightedBox>
              </header>
              <SplitSection
                leftGrow={8}
                rightGrow={2}
                left={
                  <>
                    <h2>Description</h2>
                    <DescriptionText>{description}</DescriptionText>
                    {teamsUrl && (
                      <>
                        <h2>Microsoft Teams Meeting:</h2>
                        <TeamsLink teamsUrl={teamsUrl}></TeamsLink>
                      </>
                    )}
                    <h2>Comments</h2>
                    <DescriptionText>
                      Ask the organizer questions or build hype
                    </DescriptionText>
                    <CommentSection
                      eventId={eventId}
                      comments={comments}
                      refreshEvent={refreshEvent}
                    />
                  </>
                }
                right={
                  participants && (
                    <ParticipantList
                      participants={participants}
                      collapseAt={3}
                    />
                  )
                }
              />
            </>
          );
        }}
        renderError={() => (
          <>
            <h1>{tmpEventName}</h1>
            <FailedFetchAlert
              heading="Failed to retrieve event"
              headingAs="h2"
            />
          </>
        )}
      />
    </section>
  );
}

export default EventPage;
