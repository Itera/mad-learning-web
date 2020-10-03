import styled from 'styled-components';

import { usingTypography, usingColors } from '../../../../hooks/theme';

export const MetaInfoGroup = styled.dl`
  display: flex;
  flex-wrap: wrap;
  padding: ${usingTypography((t) => t.scaleSpacing(6))}px;
  color: ${usingColors((c) => c.ON.SECONDARY)};
  background-color: ${usingColors((c) => c.SURFACE.SECONDARY)};
  line-height: ${usingTypography((t) => t.scaleSpacing(9))}px;
`;

export const MetaInfoLabel = styled.dt`
  flex: 10%;
  font-weight: bold;
`;

export const MetaInfoValue = styled.dl`
  flex: 90%;
`;
