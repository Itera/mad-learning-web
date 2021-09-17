import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { CommentData } from 'src/types/domain';
import { useModal } from 'src/hooks/useModal';

import CommentGroup from '../CommentGroup';
import Comment from '../Comment';
import { CommentSectionWrapper, NewCommentWrapper } from './styled';
import TextAreaField from 'src/components/fields/TextAreaField';
import Button from 'src/components/inputs/Button';
import ScrollableContainer from 'src/components/ScrollableContainer';
import ReplyingToIndicator from 'src/components/Comment/ReplyingToIndicator';
import Modal from 'src/components/Modal';

import { createComment } from 'src/api/comments';

type CommentSectionProps = {
  eventId: string;
  comments: Array<CommentData>;
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

  const [commentNodes, setCommentNodes] = useState<ReactNode | undefined>();

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

  useEffect(() => {
    const topLevelComments = comments?.filter(
      (comment) => !comment.replyToCommentId
    );

    const handleClickReply = (commentData: CommentData) => {
      setReplyToCommentAuthor(commentData.byPerson.firstName);
      setReplyToCommentId(commentData.id);
      setTextAreaFocus();
    };

    const generateCommentNodes = (
      comments: Array<CommentData> | undefined,
      handleClickReply: (commentData: CommentData) => void,
      isTopLevel = true
    ): ReactNode => {
      if (!comments) {
        return undefined;
      }

      return (
        <CommentGroup>
          {comments.map((comment) => {
            let commentChildrenNodes = generateCommentNodes(
              comment.children,
              handleClickReply,
              false
            );

            return (
              <Comment
                key={comment.id}
                commentData={comment}
                isTopLevel={isTopLevel}
                onReply={handleClickReply}
              >
                {commentChildrenNodes}
              </Comment>
            );
          })}
        </CommentGroup>
      );
    };

    const nodes = generateCommentNodes(topLevelComments, handleClickReply);

    setCommentNodes(nodes);
  }, [comments]);

  return (
    <CommentSectionWrapper>
      {comments.length > 0 && (
        <ScrollableContainer>{commentNodes}</ScrollableContainer>
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
