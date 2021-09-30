import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${usingTypography((t) => t.scaleSpacing(15))}px;

  & > h2 {
    text-align: center;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${usingTypography((t) => t.scaleSpacing(5))}px;
`;

export const Link = styled.a`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: blue;
  text-decoration: underline;
`;
