import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${usingTypography((t) => t.scaleSpacing(15))}px;

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
    max-height: 400px;
  }
  @media screen and (min-width: 700px) {
    max-height: 250px;
  }
  @media screen and (min-width: 1100px) {
    max-height: 150px;
  }
`;

export const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;
