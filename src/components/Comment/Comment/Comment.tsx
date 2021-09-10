import React, { ReactNode } from 'react';
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

  // Author of this comment
  author: string;

  // Comment creation date and time
  created: string;

  // Comment ID
  commentId?: string;

  // Message of the comment
  content: string;

  // Enable replies
  replyEnabled?: boolean;
};

function Comment({
  created,
  content,
  children,
  author,
  replyEnabled = true,
}: CommentProps) {
  return (
    <CommentWrapper>
      <CommentContent>
        <CommentAuthor href="#">{author}</CommentAuthor>
        <CommentCreated>{created}</CommentCreated>
        <p>{content}</p>
        {replyEnabled && <CommentAction>Reply</CommentAction>}
      </CommentContent>
      {children}
    </CommentWrapper>
  );
}

export default Comment;
