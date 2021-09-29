import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const PageFooter = styled.footer`
  width: 100%;
  height: 300px;
  background-color: lightgray;
`;

export const FooterTitle = styled.p`
  margin: 0 auto;
  padding-top: 60px;
  justify-content: center;
  text-align: center;
  background-color: lightgray;
  font-size: ${usingTypography((t) => t.scaleFont(0.5))}px;
  font-family: 'IBMPlexSans';
`;

export const PersonContaier = styled.div`
  display: flex;
  justify-content: center;
`;









