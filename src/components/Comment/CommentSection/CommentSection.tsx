import React, { ReactNode, useRef, useState } from 'react';
import { CommentData } from 'src/types/domain';

import CommentGroup from '../CommentGroup';
import Comment from '../Comment';
import { CommentSectionWrapper, NewCommentWrapper } from './styled';
import TextAreaField from 'src/components/fields/TextAreaField';
import Button from 'src/components/inputs/Button';
import ScrollableContainer from 'src/components/ScrollableContainer';
import ReplyingToIndicator from 'src/components/Comment/ReplyingToIndicator';

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

  const setTextAreaFocus = () => {
    textAreaRef.current?.focus();
  };

  const topLevelComments = getTopLevelComments(comments);
  const commentNodes = generateCommentNodes(
    topLevelComments,
    setReplyToCommentId,
    setReplyToCommentAuthor,
    setTextAreaFocus
  );

  const handleSubmitComment = async (
    eventId: string,
    commentBody: string,
    replyToCommentId: string | undefined
  ) => {
    await createComment(eventId, commentBody, replyToCommentId);
    refreshEvent();
    setCommentBody('');
    setReplyToCommentAuthor(undefined);
    setReplyToCommentId(undefined);
  };

  return (
    <CommentSectionWrapper>
      {comments.length > 0 && (
        <ScrollableContainer>{commentNodes}</ScrollableContainer>
      )}

      <NewCommentWrapper>
        {replyToCommentId && (
          <ReplyingToIndicator
            replyingToAuthor={replyToCommentAuthor}
            setReplyToCommentId={setReplyToCommentId}
            setReplyToCommentAuthor={setReplyToCommentAuthor}
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
      </NewCommentWrapper>
    </CommentSectionWrapper>
  );
}

function getTopLevelComments(
  comments: Array<CommentData> | undefined
): Array<CommentData> | undefined {
  if (comments === undefined) {
    return undefined;
  }

  let topLevelComments = Array<CommentData>();

  for (let comment of comments) {
    if (!comment.replyToCommentId) {
      topLevelComments.push(comment);
    }
  }

  return topLevelComments;
}

function generateCommentNodes(
  comments: Array<CommentData> | undefined,
  setReplyToCommentId: Function,
  setReplyToCommentAuthor: Function,
  setTextAreaFocus: () => void,
  isTopLevel = true
): ReactNode {
  if (comments === undefined) {
    return undefined;
  }

  return (
    <CommentGroup>
      {comments.map((comment) => {
        let commentChildrenNodes = generateCommentNodes(
          comment.children,
          setReplyToCommentId,
          setReplyToCommentAuthor,
          setTextAreaFocus,
          false
        );

        return (
          <Comment
            key={comment.id}
            commentData={comment}
            setReplyToCommentId={setReplyToCommentId}
            setReplyToCommentAuthor={setReplyToCommentAuthor}
            isTopLevel={isTopLevel}
            setFocus={setTextAreaFocus}
          >
            {commentChildrenNodes}
          </Comment>
        );
      })}
    </CommentGroup>
  );
}
