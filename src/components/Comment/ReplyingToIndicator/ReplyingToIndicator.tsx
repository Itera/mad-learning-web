import React from 'react';
import { IndicatorWrapper, AbortButton } from './styled';

type ReplyingToIndicatorProps = {
  replyingToAuthor: string | undefined;
  onAbort: () => void;
};

function ReplyingToIndicator({
  replyingToAuthor,
  onAbort,
}: ReplyingToIndicatorProps) {
  return (
    <IndicatorWrapper>
      <p>Replying in {replyingToAuthor}'s thread</p>
      <AbortButton onClick={onAbort}>X</AbortButton>
    </IndicatorWrapper>
  );
}

export default ReplyingToIndicator;
