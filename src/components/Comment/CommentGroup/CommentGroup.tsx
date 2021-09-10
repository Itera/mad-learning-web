import React, { ReactNode } from 'react';
import { CommentGroupWrapper } from './styled';

type CommentGroupProps = {
  // Additional classes
  className?: string;

  // Primary content
  children: ReactNode;

  // Collapsed or hidden from view
  collapsed?: boolean;
};

function CommentGroup({ children }: CommentGroupProps) {
  return <CommentGroupWrapper>{children}</CommentGroupWrapper>;
}

export default CommentGroup;
