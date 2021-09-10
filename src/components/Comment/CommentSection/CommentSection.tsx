import React, { ReactNode } from 'react';
import { CommentData, Person } from '../../../types/domain';
import CommentGroup from '../CommentGroup';
import Comment from '../Comment';

type CommentSectionProps = {
  comments?: Array<CommentData>;
};

export default function CommentSection({ comments }: CommentSectionProps) {
  const topLevelComments = getTopLevelComments(comments);
  const commentNodes = generateCommentNodes(topLevelComments);

  return <div>{commentNodes}</div>;
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
  comments: Array<CommentData> | undefined
): ReactNode {
  if (comments === undefined) {
    return undefined;
  }

  return (
    <CommentGroup>
      {comments.map((comment) => {
        let commentChildrenNodes = generateCommentNodes(comment.children);

        return <Comment commentData={comment}>{commentChildrenNodes}</Comment>;
      })}
    </CommentGroup>
  );
}
