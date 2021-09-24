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
} from './styled';

type CommentProps = {
  children?: ReactNode;
  commentData: CommentData;
  isTopLevel?: boolean;
  onReply: (commentData: CommentData) => void;
};

function Comment({
  commentData,
  children,
  isTopLevel = true,
  onReply,
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
        {isTopLevel && (
          <CommentAction onClick={() => onReply(commentData)}>
            Reply
          </CommentAction>
        )}
      </CommentContent>
      {children}
    </CommentWrapper>
  );
}

export default Comment;
