import { usingColors, usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding: 2.5vw;
  margin-left: -2.5vw;
  margin-right: -2.5vw;
`;

export const PageFooter = styled.footer`
  width: 100%;
  height: 30vh;
  margin-top: ${usingTypography((t) => t.scaleSpacing(12))}px;
  background-color: ${usingColors((t) => t.SURFACE.PRIMARY_VARIANT)};
`;

export const FooterTitle = styled.p`
  margin: 0 auto;
  padding-top: ${usingTypography((t) => t.scaleFont(3))}px;
  justify-content: center;
  text-align: center;
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  font-family: 'IBMPlexSans';
`;

export const PersonContaier = styled.div`
  display: flex;
  justify-content: center;
`;
