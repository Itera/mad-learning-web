import React from 'react';
import {
  HeroButton,
  HeroButtonContainer,
  HeroButtonText,
  HeroContainer,
  HeroImage,
  HeroLink,
  HeroText,
  HeroTitle,
  TextContainer,
} from './styled';

type HeroPractiseProps = {
  link: string;
  navigate: string;
  title: string;
  text: string;
  buttonText: string;
  buttonNav: string;
  imageSrc: string;
};

function HeroPractise({
  link,
  navigate,
  title,
  text,
  buttonText,
  buttonNav,
  imageSrc,
}: HeroPractiseProps) {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroLink href={navigate}>{link}</HeroLink>
        <HeroTitle>{title}</HeroTitle>
        <HeroText>{text}</HeroText>
        <HeroButtonContainer>
          <HeroButton href={buttonNav}>
            <HeroButtonText>{buttonText}</HeroButtonText>
          </HeroButton>
        </HeroButtonContainer>
      </TextContainer>

      <HeroImage src={imageSrc} />
    </HeroContainer>
  );
}

export default HeroPractise;
