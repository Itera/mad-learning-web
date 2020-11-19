import styled from 'styled-components';

import { usingColors, usingTypography } from 'src/hooks/theme';

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px;
  border: 1px solid ${usingColors((c) => c.ON.PRIMARY)};
  font-family: inherit;
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  font-variant-numeric: lining-nums;
`;
