import { usingColors, usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const PageFooter = styled.footer`
  width: 100%;
  height: 300px;
  background-color: ${usingColors((t) => t.SURFACE.PRIMARY_VARIANT)};
`;

export const FooterTitle = styled.p`
  margin: 0 auto;
  padding-top: ${usingTypography((t) => t.scaleFont(10))}px;
  justify-content: center;
  text-align: center;
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  font-family: 'IBMPlexSans';
`;

export const PersonContaier = styled.div`
  display: flex;
  justify-content: center;
`;
