import React from 'react';
import Tag from './Tag';
import { TagLayoutContainer } from './styled';

type TagLayoutProps = {
  tags: Array<string>;
};

export default function TagLayout({ tags }: TagLayoutProps) {
  return (
    <>
      <TagLayoutContainer>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </TagLayoutContainer>
    </>
  );
}
