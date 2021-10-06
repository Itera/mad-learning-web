import { usingColors, usingTypography } from "src/hooks/theme";
import styled from "styled-components";

export const LinkBoxWrapper = styled.a`
  width: 350px;
  height: 140px;
  margin: 20px;
  display: flex;
  background-color: ${usingColors((c) => c.SURFACE.PRIMARY_VARIANT)};
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${usingTypography((t) => t.scaleSpacing(1))}px;
  & > * {
    margin-top: ${usingTypography((t) => t.scaleSpacing(3))}px;
    margin-bottom: ${usingTypography((t) => t.scaleSpacing(1))}px;
    margin-left: ${usingTypography((t) => t.scaleSpacing(1))}px;
    margin-right: ${usingTypography((t) => t.scaleSpacing(5))}px;
  }
`;

export const LinkBoxTitle = styled.h2`
  font-size: ${usingTypography((t) => t.scaleSpacing(7))}px;

`;

export const LinkBoxText = styled.p`
  font-size: ${usingTypography((t) => t.scaleSpacing(5))}px;

`;