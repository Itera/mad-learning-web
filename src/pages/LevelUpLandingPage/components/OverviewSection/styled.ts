import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${usingTypography((t) => t.scaleSpacing(12))}px;

  & > h2 {
    text-align: center;
  }
`;

export const ShortcutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${usingTypography((t) => t.scaleSpacing(12))}px
    ${usingTypography((t) => t.scaleSpacing(10))}px;
  margin: 0 auto;
  max-width: 80%;
`;

export const ShortcutItem = styled.div`
  width: 400px;
  height: 400px;
`;
