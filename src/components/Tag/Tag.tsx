import React from 'react';
import { TagContainer } from './styled';

type TagProps = {
  selected?: boolean;
  onClick?: () => void;
  children: string;
};

export default function Tag({ onClick, children, selected = true }: TagProps) {
  return (
    <TagContainer selected={selected} onClick={onClick}>
      {children}
    </TagContainer>
  );
}
