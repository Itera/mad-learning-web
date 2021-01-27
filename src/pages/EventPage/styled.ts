import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const HighlightedBox = styled.div`
  padding: ${usingTypography((t) => t.scaleSpacing(6))}px;
  color: ${usingColors((c) => c.ON.SECONDARY)};
  background-color: ${usingColors((c) => c.SURFACE.SECONDARY)};
`;

export const DescriptionText = styled.div`
  white-space: pre-line;
`;
