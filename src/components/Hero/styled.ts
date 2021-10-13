import { usingColors, usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: -2.5vw;
  margin-right: -2.5vw;
  padding: 2.5vw;

  height: 30vh;

  background-color: ${usingColors((t) => t.SURFACE.PRIMARY_VARIANT)};
`;

export const Header = styled.h1`
  width: 70%;

  font-size: ${usingTypography((t) => t.scaleFont(10))}px;
  font-family: 'IBMPlexSans-Bold';

  text-align: center;
`;
