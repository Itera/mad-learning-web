import styled from 'styled-components';

export const CutoffImageContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `;

export const TopLeftImage = styled.img`
  webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 32%, 35% 32%, 35% 0); 
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 32%, 35% 32%, 35% 0);

  width: 300px;
  height: 300px;
`;

export const TopRightImage = styled.img`
  webkit-clip-path: polygon(0 0, 65% 0, 65% 36%, 100% 36%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 65% 0, 65% 36%, 100% 36%, 100% 100%, 0 100%);

  width: 300px;
  height: 300px;
`;


