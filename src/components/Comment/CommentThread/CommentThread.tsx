import React from 'react';

import { AuthProviderInstance } from 'src/utils/auth';
import { CommentData } from 'src/types/domain';

import Comment from '../Comment';
import { CommentThreadWrapper } from './styled';

type CommentThreadProps = {
  comments?: Array<CommentData>;
  onReply: (commentData: CommentData) => void;
  onDelete: (commentData: CommentData) => void;
  isTopLevel?: boolean;
};

function CommentThread({
  comments,
  onReply,
  onDelete,
  isTopLevel = true,
}: CommentThreadProps) {
  if (!comments) {
    return null;
  }

  const account = AuthProviderInstance.account;

  return (
    <CommentThreadWrapper>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentData={comment}
            onReply={onReply}
            onDelete={onDelete}
            isTopLevel={isTopLevel}
            isAuthor={comment.byPerson.id === account?.localAccountId}
          >
            <CommentThread
              comments={comment.children}
              onReply={onReply}
              onDelete={onDelete}
              isTopLevel={false}
            ></CommentThread>
          </Comment>
        );
      })}
    </CommentThreadWrapper>
  );
}

export default CommentThread;
