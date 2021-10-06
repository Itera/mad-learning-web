import { usingTypography } from "src/hooks/theme";
import styled from "styled-components";

export const WideWrapper = styled.section`
  margin: 2.5vw;
  margin-left: -2.5vw;
  margin-right: -2.5vw;
`;

export const CenteredWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainImage = styled.img`
  position: relative;
  width: 100%;
  height: 30vw;
`;

export const MainText = styled.h1`
  position: absolute;
  color: white;
  font-family: 'IBMPlexSans';
  font-size: ${usingTypography((t) => t.scaleSpacing(10))}px;
`;