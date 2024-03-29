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
import ResourceLinkList from './components/ResourceLinkList';
import StatusLabel from './components/StatusLabel';
import TeamsLink from './components/TeamsLink';
import {
  DescriptionText,
  HighlightedBox,
  ButtonContainer,
  EventHeader,
} from './styled';
import { fetchEvent } from 'src/api/events';
import DeleteButton from 'src/components/inputs/DeleteButton';
import PublishButton from 'src/components/inputs/PublishButton';
import Button from 'src/components/inputs/Button';
import { AuthProviderInstance } from 'src/utils/auth';
import { EventStatus } from 'src/utils/constants';

type EventPageProps = {
  eventId: string;
  '*': string;
} & RouteComponentProps;

function EventPage({ eventId, navigate, ...rest }: EventPageProps) {
  const tmpEventName = rest['*'];

  const handleDelete = useCallback(() => {
    navigate!('/');
  }, [navigate]);

  const handlePublish = useCallback(
    (path: string) => {
      navigate!(path);
    },
    [navigate]
  );

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
            resourceLinks,
          } = event;

          const account = AuthProviderInstance.account;

          const isOwner =
            owner && account && account.localAccountId === owner.id;

          return (
            <>
              <header>
                <EventHeader>{name}</EventHeader>
                {isOwner && <StatusLabel eventStatus={eventStatus} />}
                <HighlightedBox>
                  <MetaInfo
                    name={name}
                    startTime={startTime}
                    endTime={endTime}
                    imageUrl={imageUrl}
                    location={location}
                    owner={owner}
                  />
                  <ButtonContainer>
                    <RsvpButton event={event} onSuccess={refreshEvent} />
                    <DeleteButton event={event} onDelete={handleDelete} />
                    {isOwner && (
                      <Button
                        variant="highlight"
                        onClick={() =>
                          navigate!(`/update-event/${event.id}/${name}`)
                        }
                      >
                        Edit
                      </Button>
                    )}
                    {isOwner && event.eventStatus === EventStatus.DRAFT && (
                      <PublishButton event={event} onPublish={handlePublish} />
                    )}
                  </ButtonContainer>
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
                  <>
                    {resourceLinks && resourceLinks.length > 0 && (
                      <ResourceLinkList resourceLinks={resourceLinks} />
                    )}
                    {participants && (
                      <ParticipantList
                        participants={participants}
                        collapseAt={3}
                      />
                    )}
                  </>
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
