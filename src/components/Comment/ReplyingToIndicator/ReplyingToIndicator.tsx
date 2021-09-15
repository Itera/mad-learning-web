import React from 'react';
import { IndicatorWrapper, AbortButton } from './styled';
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
      <p>Replying in {replyingToAuthor}'s thread</p>
      <AbortButton onClick={handleClick}>X</AbortButton>
    </IndicatorWrapper>
  );
}

export default ReplyingToIndicator;
