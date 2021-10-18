import React from 'react';
import {
  CutoutBottomLeft,
  CutoutBottomRight,
  CutoutHighBottomLeft,
  CutoutHighBottomRight,
  CutoutHighTopLeft,
  CutoutHighTopRight,
  CutoutTopLeft,
  CutoutTopRight,
  CutoutWideBottomLeft,
  CutoutWideBottomRight,
  CutoutWideTopLeft,
  CutoutWideTopRight,
  ImageContainer,
} from './styled';

export type CutoffMode =
  | 'TopLeft'
  | 'TopRight'
  | 'BottomLeft'
  | 'BottomRight'
  | 'WideTopLeft'
  | 'WideTopRight'
  | 'WideBottomLeft'
  | 'WideBottomRight'
  | 'HighTopLeft'
  | 'HighTopRight'
  | 'HighBottomLeft'
  | 'HighBottomRight';

type CutoutImageProps = {
  mode: CutoffMode;
  image: string;
};

function CutoutImage({ mode, image }: CutoutImageProps) {
  switch (mode) {
    case 'TopLeft':
      return (
        <ImageContainer>
          <CutoutTopLeft src={image} />
        </ImageContainer>
      );
    case 'TopRight':
      return (
        <ImageContainer>
          <CutoutTopRight src={image} />
        </ImageContainer>
      );
    case 'BottomLeft':
      return (
        <ImageContainer>
          <CutoutBottomLeft src={image} />
        </ImageContainer>
      );
    case 'BottomRight':
      return (
        <ImageContainer>
          <CutoutBottomRight src={image} />
        </ImageContainer>
      );
    case 'WideTopLeft':
      return (
        <ImageContainer>
          <CutoutWideTopLeft src={image} />
        </ImageContainer>
      );
    case 'WideTopRight':
      return (
        <ImageContainer>
          <CutoutWideTopRight src={image} />
        </ImageContainer>
      );
    case 'WideBottomLeft':
      return (
        <ImageContainer>
          <CutoutWideBottomLeft src={image} />
        </ImageContainer>
      );
    case 'WideBottomRight':
      return (
        <ImageContainer>
          <CutoutWideBottomRight src={image} />
        </ImageContainer>
      );
    case 'HighTopLeft':
      return (
        <ImageContainer>
          <CutoutHighTopLeft src={image} />
        </ImageContainer>
      );
    case 'HighTopRight':
      return (
        <ImageContainer>
          <CutoutHighTopRight src={image} />
        </ImageContainer>
      );
    case 'HighBottomLeft':
      return (
        <ImageContainer>
          <CutoutHighBottomLeft src={image} />
        </ImageContainer>
      );
    case 'HighBottomRight':
      return (
        <ImageContainer>
          <CutoutHighBottomRight src={image} />
        </ImageContainer>
      );
    default:
      return <h3>Failed to place cutoff image</h3>;
  }
}

export default CutoutImage;
