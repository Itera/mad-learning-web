import styled from 'styled-components';

export const CutoutTopLeft = styled.img`
  webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 32%, 35% 32%, 35% 0);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 32%, 35% 32%, 35% 0);
`; 

export const CutoutTopRight = styled.img`
  webkit-clip-path: polygon(0 0, 65% 0, 65% 34%, 100% 34%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 65% 0, 65% 34%, 100% 34%, 100% 100%, 0 100%);
`; 

export const CutoutBottomLeft = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 160px;
  left: -1px;
  bottom: -1px;
`;

export const CutoutBottomRight = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 160px;
  right: -1px;
  bottom: -1px;
`;

export const CutoutWideTopLeft = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 80px;
  left: -1px;
  top: -1px;
`; 

export const CutoutWideTopRight = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 80px;
  right: -1px;
  top: -1px;
`; 

export const CutoutWideBottomLeft = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 80px;
  left: -1px;
  bottom: -1px;
`;

export const CutoutWideBottomRight = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 80px;
  right: -1px;
  bottom: -1px;
`;

export const CutoutHighTopLeft = styled.img`
  background-color: white;
  position: absolute;
  width: 80px;
  height: 160px;
  left: -1px;
  top: -1px;
`; 

export const CutoutHighTopRight = styled.img`
  background-color: white;
  position: absolute;
  width: 80px;
  height: 160px;
  right: -1px;
  top: -1px;
`; 

export const CutoutHighBottomLeft = styled.img`
  background-color: white;
  position: absolute;
  width: 80px;
  height: 160px;
  left: -1px;
  bottom: -1px;
`;

export const CutoutHighBottomRight = styled.img`
  background-color: white;
  position: absolute;
  width: 160px;
  height: 160px;
  right: -1px;
  bottom: -1px;
`;
