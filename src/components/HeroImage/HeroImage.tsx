import React from 'react';
import { CenteredWrapper, MainImage, MainText, WideWrapper } from './styled';

type HeroImageProps = {
  imageSrc: string;
  heroTitle: string;
};

function HeroImage({ imageSrc, heroTitle }: HeroImageProps) {
  return (
    <WideWrapper>
      <CenteredWrapper>
        <MainImage src={imageSrc} />
        <MainText>{heroTitle}</MainText>
      </CenteredWrapper>
    </WideWrapper>
  );
}

export default HeroImage;
