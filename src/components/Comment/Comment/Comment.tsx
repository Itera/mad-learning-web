import React, { ReactNode } from 'react';
import { CommentData } from 'src/types/domain';
import {
  formatLongPublishDateString,
  formatPublishDateString,
} from 'src/utils/formatting';
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
  return (
    <CommentWrapper isTopLevel={isTopLevel}>
      <CommentContent>
        <CommentAuthor>
          {commentData.byPerson.firstName + ' ' + commentData.byPerson.lastName}
        </CommentAuthor>
        <CommentMetadata title={formatLongPublishDateString(commentData.date)}>
          {formatPublishDateString(commentData.date)}
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
