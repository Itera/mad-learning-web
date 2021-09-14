import React from 'react';
import { IndicatorWrapper } from './styled';
type ReplyingToIndicatorProps = {
  replyingToAuthor: string | undefined;
  setReplyToCommentId: Function;
  setReplyToCommentAuthor: Function;
};

function ReplyingToIndicator({
  replyingToAuthor,
  setReplyToCommentId,
  setReplyToCommentAuthor,
}: ReplyingToIndicatorProps) {
  function handleClick() {
    setReplyToCommentId(undefined);
    setReplyToCommentAuthor(undefined);
  }

  return (
    <IndicatorWrapper>
      <p>Replying to {replyingToAuthor}</p>
      <a href="#" onClick={handleClick}>
        X
      </a>
    </IndicatorWrapper>
  );
}

export default ReplyingToIndicator;
