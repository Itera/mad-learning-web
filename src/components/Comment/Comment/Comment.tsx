import React, { ReactNode } from 'react';
import { CommentData } from 'src/types/domain';
import {
  CommentAuthor,
  CommentContent,
  CommentCreated,
  CommentWrapper,
  CommentAction,
} from './styled';

type CommentProps = {
  // Additional classes
  className?: string;

  // Primary content
  children?: ReactNode;

  // Collapsed or hidden from view
  collapsed?: boolean;

  commentData: CommentData;

  setReplyToCommentId: Function;

  setReplyToCommentAuthor: Function;

  isTopLevel?: boolean;
};

function Comment({
  commentData,
  children,
  setReplyToCommentId,
  setReplyToCommentAuthor,
  isTopLevel = true,
}: CommentProps) {
  const handleClickReply = function () {
    setReplyToCommentAuthor(commentData.byPerson.firstName);
    setReplyToCommentId(commentData.id);
  };

  return (
    <CommentWrapper isTopLevel={isTopLevel}>
      <CommentContent key={commentData.id}>
        <CommentAuthor href="#">
          {commentData.byPerson.firstName + ' ' + commentData.byPerson.lastName}
        </CommentAuthor>
        <CommentCreated>{commentData.date}</CommentCreated>
        <p>{commentData.body}</p>
        {isTopLevel && (
          <CommentAction onClick={handleClickReply}>Reply</CommentAction>
        )}
      </CommentContent>
      {children}
    </CommentWrapper>
  );
}

export default Comment;
