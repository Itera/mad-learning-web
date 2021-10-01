import React from 'react';
import CutoutImage from '../CutoutImage';
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
          <CutoutImage mode={cutoffMode} image={imageSrc} />
          <CutoutImageText>{imageText}</CutoutImageText>
        </OuterDiv>
      </TempColumn>
    </a>
  );
}

export default CutoutImageContainer;
