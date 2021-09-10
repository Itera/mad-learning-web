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

  replyEnabled?: boolean;
};

function Comment({ commentData, children, replyEnabled = true }: CommentProps) {
  return (
    <CommentWrapper>
      <CommentContent key={commentData.id}>
        <CommentAuthor href="#">{commentData.byPerson.firstName}</CommentAuthor>
        <CommentCreated>{commentData.date}</CommentCreated>
        <p>{commentData.body}</p>
        {replyEnabled && <CommentAction>Reply</CommentAction>}
      </CommentContent>
      {children}
    </CommentWrapper>
  );
}

export default Comment;
