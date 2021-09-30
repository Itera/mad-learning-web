import React, { useRef, useState } from 'react';

import { CommentData } from 'src/types/domain';
import { useModal } from 'src/hooks/useModal';

import { createComment, deleteComment } from 'src/api/comments';

import Button from 'src/components/inputs/Button';
import CommentThread from '../CommentThread';
import Modal from 'src/components/Modal';
import ReplyingToIndicator from 'src/components/Comment/ReplyingToIndicator';
import ScrollableContainer from 'src/components/ScrollableContainer';
import TextAreaField from 'src/components/fields/TextAreaField';
import { CommentSectionWrapper, NewCommentWrapper } from './styled';
import ConfirmationModal from 'src/components/Modal/ConfirmationModal';

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
  const [commentIdToDelete, setCommentIdToDelete] = useState<
    string | undefined
  >(undefined);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [commentFormatErrorModalShown, toggleCommentFormatErrorModal] =
    useModal();
  const [confirmCommentDeletionModalShown, toggleConfirmCommentDeletionModal] =
    useModal();

  const topLevelComments = comments?.filter(
    (comment) => !comment.replyToCommentId
  );

  const handleSubmitComment = async (
    eventId: string,
    commentBody: string,
    replyToCommentId: string | undefined
  ) => {
    if (!commentBody.trim()) {
      toggleCommentFormatErrorModal();
    } else {
      await createComment(eventId, commentBody, replyToCommentId);
      refreshEvent();
      setCommentBody('');
      handleAbortReply();
    }
  };

  const handleClickDeleteComment = (commentData: CommentData) => {
    setCommentIdToDelete(commentData.id);
    toggleConfirmCommentDeletionModal();
  };

  const handleDeleteComment = async () => {
    toggleConfirmCommentDeletionModal();

    if (!commentIdToDelete) {
      console.error("Can't delete comment, no Id has been set for deletion.");
      return;
    }

    await deleteComment(eventId, commentIdToDelete);
    refreshEvent();
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
            onDelete={handleClickDeleteComment}
          />
        </ScrollableContainer>
      )}
      <Modal
        isShown={confirmCommentDeletionModalShown}
        hide={toggleConfirmCommentDeletionModal}
        headerText="Delete comment"
        modalContent={
          <ConfirmationModal
            confirmText="DELETE"
            cancelText="CANCEL"
            onConfirm={handleDeleteComment}
            onCancel={toggleConfirmCommentDeletionModal}
            message="Are you sure you want to delete your comment?"
          />
        }
      />

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
          isShown={commentFormatErrorModalShown}
          hide={toggleCommentFormatErrorModal}
          headerText="Confirmation"
          modalContent="You can't submit an empty comment"
        />
      </NewCommentWrapper>
    </CommentSectionWrapper>
  );
}
