import styled from 'styled-components';

export const ImageContainer = styled.div`
  & > * {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
`;

export const CutoutTopLeft = styled.img`
  webkit-clip-path: polygon(0 35%, 35% 35%, 35% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 35%, 35% 35%, 35% 0, 100% 0, 100% 100%, 0 100%);
`;

export const CutoutTopRight = styled.img`
  webkit-clip-path: polygon(0 0, 65% 0, 65% 35%, 100% 35%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 65% 0, 65% 35%, 100% 35%, 100% 100%, 0 100%);
`;

export const CutoutBottomLeft = styled.img`
  webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 35% 100%, 35% 65%, 0 65%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 35% 100%, 35% 65%, 0 65%);
`;

export const CutoutBottomRight = styled.img`
  webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 65% 65%, 65% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 65%, 65% 65%, 65% 100%, 0 100%);
`;

export const CutoutWideTopLeft = styled.img`
  webkit-clip-path: polygon(0 20%, 40% 20%, 40% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 20%, 40% 20%, 40% 0, 100% 0, 100% 100%, 0 100%);
`;

export const CutoutWideTopRight = styled.img`
  webkit-clip-path: polygon(0 0, 60% 0, 60% 20%, 100% 20%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 60% 0, 60% 20%, 100% 20%, 100% 100%, 0 100%);
`;

export const CutoutWideBottomLeft = styled.img`
  webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%, 40% 80%, 0 80%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%, 40% 80%, 0 80%);
`;

export const CutoutWideBottomRight = styled.img`
  webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 60% 80%, 60% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 60% 80%, 60% 100%, 0 100%);
`;

export const CutoutHighTopLeft = styled.img`
  webkit-clip-path: polygon(0 40%, 20% 40%, 20% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 40%, 20% 40%, 20% 0, 100% 0, 100% 100%, 0 100%);
`;

export const CutoutHighTopRight = styled.img`
  webkit-clip-path: polygon(0 0, 80% 0, 80% 40%, 100% 40%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 80% 0, 80% 40%, 100% 40%, 100% 100%, 0 100%);
`;

export const CutoutHighBottomLeft = styled.img`
  webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 20% 60%, 0 60%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 20% 60%, 0 60%);
`;

export const CutoutHighBottomRight = styled.img`
  webkit-clip-path: polygon(0 0, 100% 0, 100% 60%, 80% 60%, 80% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 60%, 80% 60%, 80% 100%, 0 100%);
`;
