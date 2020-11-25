import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const MetaInfoGroup = styled.dl`
  display: flex;
  flex-wrap: wrap;
  line-height: ${usingTypography((t) => t.scaleSpacing(9))}px;
`;

export const MetaInfoLabel = styled.dt`
  flex: 10%;
  font-weight: bold;
`;

export const MetaInfoValue = styled.dl`
  flex: 90%;
`;
