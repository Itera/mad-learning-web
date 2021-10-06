import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const PractiseWrapper = styled.section`
  width: 100%;
  justify-content: center;
`;

export const Space = styled.div`
  height: 2vw;
`;

export const PractiseTextWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PractiseText = styled.p`
  width: 60%;
  font: 'IBMPlexSans';
  font-size: ${usingTypography((t) => t.scaleSpacing(6))}px;
`;
