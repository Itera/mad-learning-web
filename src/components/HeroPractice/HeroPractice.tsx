import React from 'react';
import {
  HeroButton,
  HeroContainer,
  HeroImage,
  HeroLink,
  HeroText,
  HeroTitle,
  TextContainer,
} from './styled';

type HeroPracticeProps = {
  linkText: string;
  navigate: string;
  title: string;
  text: string;
  buttonText: string;
  buttonNav: string;
  imageSrc: string;
};

function HeroPractice({
  linkText,
  navigate,
  title,
  text,
  buttonText,
  buttonNav,
  imageSrc,
}: HeroPracticeProps) {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroLink href={navigate}>{linkText}</HeroLink>
        <HeroTitle>{title}</HeroTitle>
        <HeroText>{text}</HeroText>
        <HeroButton href={buttonNav}>{buttonText}</HeroButton>
      </TextContainer>

      <HeroImage src={imageSrc} />
    </HeroContainer>
  );
}

export default HeroPractice;
