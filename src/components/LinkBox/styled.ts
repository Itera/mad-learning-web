import { usingColors } from 'src/hooks/theme';
import styled from 'styled-components';

export const LinkBoxContainer = styled.section`
  width: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LinkBoxWrapper = styled.a`
  height: 140px;
  display: flex;
  padding: 12px;
  background-color: ${usingColors((c) => c.SURFACE.PRIMARY_VARIANT)};
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  & > * {
    padding: 0 6px;
    margin: 0 0 5px;
  }
`;

export const LinkBoxTitle = styled.h2`
  font-size: 1.4rem;
`;

export const LinkBoxText = styled.p`
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
