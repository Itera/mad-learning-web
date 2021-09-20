import React, { useRef, useState } from 'react';

import { CommentData } from 'src/types/domain';
import { useModal } from 'src/hooks/useModal';

import { createComment } from 'src/api/comments';

import Button from 'src/components/inputs/Button';
import CommentThread from '../CommentThread';
import Modal from 'src/components/Modal';
import ReplyingToIndicator from 'src/components/Comment/ReplyingToIndicator';
import ScrollableContainer from 'src/components/ScrollableContainer';
import TextAreaField from 'src/components/fields/TextAreaField';
import { CommentSectionWrapper, NewCommentWrapper } from './styled';

type CommentSectionProps = {
  eventId: string;
  comments?: Array<CommentData>;
  refreshEvent: Function;
};

export default function CommentSection({
  eventId,
  comments,
  refreshEvent,
}: CommentSectionProps) {
  const [commentBody, setCommentBody] = useState('');
  const [replyToCommentId, setReplyToCommentId] = useState<string | undefined>(
    undefined
  );
  const [replyToCommentAuthor, setReplyToCommentAuthor] = useState<
    string | undefined
  >(undefined);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isModalShown, toggleModal] = useModal();

  const topLevelComments = comments?.filter(
    (comment) => !comment.replyToCommentId
  );

  const handleSubmitComment = async (
    eventId: string,
    commentBody: string,
    replyToCommentId: string | undefined
  ) => {
    if (!commentBody.trim()) {
      toggleModal();
    } else {
      await createComment(eventId, commentBody, replyToCommentId);
      refreshEvent();
      setCommentBody('');
      handleAbortReply();
    }
  };

  const setTextAreaFocus = () => {
    textAreaRef.current?.focus();
  };

  const handleAbortReply = () => {
    setReplyToCommentId(undefined);
    setReplyToCommentAuthor(undefined);
  };

  const handleClickReply = (commentData: CommentData) => {
    setReplyToCommentAuthor(commentData.byPerson.firstName);
    setReplyToCommentId(commentData.id);
    setTextAreaFocus();
  };

  return (
    <CommentSectionWrapper>
      {comments && comments.length > 0 && (
        <ScrollableContainer>
          <CommentThread
            comments={topLevelComments}
            onReply={handleClickReply}
          />
        </ScrollableContainer>
      )}

      <NewCommentWrapper>
        {replyToCommentId && (
          <ReplyingToIndicator
            replyingToAuthor={replyToCommentAuthor}
            onAbort={handleAbortReply}
          />
        )}
        <TextAreaField
          name="newComment"
          placeholder="Your comment goes here"
          value={commentBody}
          onChange={setCommentBody}
          resize={false}
          ref={textAreaRef}
        />
        <Button
          onClick={() =>
            handleSubmitComment(eventId, commentBody, replyToCommentId)
          }
        >
          Add comment
        </Button>
        <Modal
          isShown={isModalShown}
          hide={toggleModal}
          headerText="Confirmation"
          modalContent={<>You can't submit an empty comment</>}
        />
      </NewCommentWrapper>
    </CommentSectionWrapper>
  );
}
