import React from 'react';
import CutoutImage from '../CutoutImage';
import { CutoutImageText, MainImage, OuterDiv, TempColumn } from './styled';

type CutoutImageContainerProps = {
    imageText : string,
    imageSrc : string;
    cutoffMode: string;
    navigate : string;
    
}

function CutoutImageContainer({imageText, imageSrc, cutoffMode, navigate} : CutoutImageContainerProps) {
    return (
        <a href={navigate}>
            <TempColumn>
                <OuterDiv>
                    <MainImage src={imageSrc}></MainImage>
                    <CutoutImage mode={cutoffMode}/>
                    <CutoutImageText>{imageText}</CutoutImageText>
                </OuterDiv>
            </TempColumn>
        </a>
    )
}

export default CutoutImageContainer;