import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${usingTypography((t) => t.scaleSpacing(12))}px;

  & > h2 {
    text-align: center;
  }
`;
