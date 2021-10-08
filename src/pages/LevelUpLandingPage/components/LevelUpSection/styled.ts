import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${usingTypography((t) => t.scaleSpacing(15))}px;

  & > h2 {
    text-align: center;
  }
`;

export const SplitContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${usingTypography((t) => t.scaleSpacing(10))}px;
`;

export const ContainerItem = styled.div`
  max-width: 700px;
`;

export const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;
