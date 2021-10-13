import React from 'react';
import {
  ArticleContainer,
  ArticleImage,
  ArticleLink,
  ArticleText,
  ArticleTitle,
  CenteredWrapper,
  TextContainer,
} from './styled';

type ImageArticleProps = {
  title: string;
  text: string;
  link: string;
  image: string;
  navigate: string;
};

function ImageArticle({
  title,
  text,
  link,
  image,
  navigate,
}: ImageArticleProps) {
  return (
    <CenteredWrapper>
      <ArticleContainer href={navigate}>
        <TextContainer>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleText>{text}</ArticleText>
          <ArticleLink>{link}</ArticleLink>
        </TextContainer>
        <ArticleImage src={image}></ArticleImage>
      </ArticleContainer>
    </CenteredWrapper>
  );
}

export default ImageArticle;
