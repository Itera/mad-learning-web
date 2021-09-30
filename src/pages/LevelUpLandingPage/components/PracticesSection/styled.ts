import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${usingTypography((t) => t.scaleSpacing(12))}px;

  & > h2 {
    text-align: center;
  }

  & > p {
    text-align: center;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: column wrap;
  gap: ${usingTypography((t) => t.scaleSpacing(5))}px;

  max-width: 1300px;

  @media screen and (min-width: 450px) {
    max-height: 40vh;
  }
  @media screen and (min-width: 700px) {
    max-height: 25vh;
  }
  @media screen and (min-width: 1100px) {
    max-height: 15vh;
  }
`;

export const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;
