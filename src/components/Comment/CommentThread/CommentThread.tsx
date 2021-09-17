import React from 'react';

import { CommentData } from 'src/types/domain';

import Comment from '../Comment';
import { CommentThreadWrapper } from './styled';

type CommentThreadProps = {
  comments?: Array<CommentData>;
  onReply: (commentData: CommentData) => void;
  isTopLevel?: boolean;
};

function CommentThread({
  comments,
  onReply,
  isTopLevel = true,
}: CommentThreadProps) {
  if (!comments) {
    return null;
  }

  return (
    <CommentThreadWrapper>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentData={comment}
            isTopLevel={isTopLevel}
            onReply={onReply}
          >
            <CommentThread
              comments={comment.children}
              onReply={onReply}
              isTopLevel={false}
            ></CommentThread>
          </Comment>
        );
      })}
    </CommentThreadWrapper>
  );
}

export default CommentThread;
