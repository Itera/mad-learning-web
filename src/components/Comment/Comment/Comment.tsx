import React, { ReactNode } from 'react';
import { CommentData } from 'src/types/domain';
import {
  formatLongPublishDateString,
  formatPublishDateString,
} from 'src/utils/formatting';
import {
  CommentAuthor,
  CommentContent,
  CommentCreated,
  CommentWrapper,
  CommentAction,
} from './styled';

type CommentProps = {
  children?: ReactNode;
  commentData: CommentData;
  isTopLevel?: boolean;
  setReplyToCommentId: Function;
  setReplyToCommentAuthor: Function;
  setFocus: () => void;
};

function Comment({
  commentData,
  children,
  setReplyToCommentId,
  setReplyToCommentAuthor,
  isTopLevel = true,
  setFocus,
}: CommentProps) {
  const handleClickReply = function () {
    setReplyToCommentAuthor(commentData.byPerson.firstName);
    setReplyToCommentId(commentData.id);
    setFocus();
  };

  return (
    <CommentWrapper isTopLevel={isTopLevel}>
      <CommentContent key={commentData.id}>
        <CommentAuthor href="#">
          {commentData.byPerson.firstName + ' ' + commentData.byPerson.lastName}
        </CommentAuthor>
        <CommentCreated title={formatLongPublishDateString(commentData.date)}>
          {formatPublishDateString(commentData.date)}
        </CommentCreated>
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
