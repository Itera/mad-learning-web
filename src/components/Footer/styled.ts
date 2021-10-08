import { usingColors, usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding: 2, 5vw;
  margin-left: -2.5vw;
  margin-right: -2.5vw;
`;

export const PageFooter = styled.footer`
  width: 100%;
  height: 300px;
  background-color: lightgray;
`;

export const FooterTitle = styled.p`
  margin: 0 auto;
  padding-top: 40px;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-family: 'IBMPlexSans';
`;

export const PersonContaier = styled.div`
  display: flex;
  justify-content: center;
`;
