import React from 'react';
import CutoutImage from '../CutoutImage';
import { CutoffMode } from '../CutoutImage/CutoutImage';
import { CutoutImageText, OuterDiv, TempColumn } from './styled';

type CutoutImageContainerProps = {
  imageText: string;
  imageSrc: string;
  cutoffMode: string;
  navigate: string;
};

function CutoutImageContainer({
  imageText,
  imageSrc,
  cutoffMode,
  navigate,
}: CutoutImageContainerProps) {
  return (
    <a href={navigate}>
      <TempColumn>
        <OuterDiv>
          <CutoutImage mode={cutoffMode as CutoffMode} image={imageSrc} />
          <CutoutImageText>{imageText}</CutoutImageText>
        </OuterDiv>
      </TempColumn>
    </a>
  );
}

export default CutoutImageContainer;
