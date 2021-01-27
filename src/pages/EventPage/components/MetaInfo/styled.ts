import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const MetaInfoGroup = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${usingTypography((t) => t.scaleSpacing(7))}px;
`;

export const MetaInfoLabel = styled.dt`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export const MetaInfoValue = styled.dl`
  margin: 0;
  padding: 0;
`;
