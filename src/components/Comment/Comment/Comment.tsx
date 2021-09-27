import React, { ReactNode } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

import { CommentData } from 'src/types/domain';
import { formatDate } from 'src/utils/formatting';
import {
  CommentAuthor,
  CommentContent,
  CommentMetadata,
  CommentWrapper,
  CommentAction,
  CommentActionsContainer,
} from './styled';

type CommentProps = {
  children?: ReactNode;
  commentData: CommentData;
  isTopLevel?: boolean;
  isAuthor: boolean;
  onReply: (commentData: CommentData) => void;
  onDelete: (commentData: CommentData) => void;
};

function Comment({
  commentData,
  children,
  isTopLevel = true,
  isAuthor,
  onReply,
  onDelete,
}: CommentProps) {
  const commentDate = parseISO(commentData.date);

  return (
    <CommentWrapper isTopLevel={isTopLevel}>
      <CommentContent>
        <CommentAuthor>
          {commentData.byPerson.firstName + ' ' + commentData.byPerson.lastName}
        </CommentAuthor>
        <CommentMetadata title={formatDate(commentDate)}>
          {formatDistanceToNow(commentDate) + ' ago'}
        </CommentMetadata>
        <p>{commentData.body}</p>
        <CommentActionsContainer>
          {isTopLevel && (
            <CommentAction onClick={() => onReply(commentData)}>
              Reply
            </CommentAction>
          )}
          {isAuthor && (
            <CommentAction onClick={() => onDelete(commentData)}>
              Delete
            </CommentAction>
          )}
        </CommentActionsContainer>
      </CommentContent>
      {children}
    </CommentWrapper>
  );
}

export default Comment;
