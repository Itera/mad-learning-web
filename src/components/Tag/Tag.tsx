import React from 'react';
import { TagContainer } from './styled';

type TagProps = {
  children: string;
};

export default function Tag({ children }: TagProps) {
  return <TagContainer>{children}</TagContainer>;
}
