import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const EventHeader = styled.h1`
  overflow-wrap: anywhere;
`;

export const HighlightedBox = styled.div`
  padding: ${usingTypography((t) => t.scaleSpacing(6))}px;
  color: ${usingColors((c) => c.ON.SECONDARY)};
  background-color: ${usingColors((c) => c.SURFACE.SECONDARY)};
`;

export const DescriptionText = styled.div`
  white-space: pre-line;
  overflow-wrap: anywhere;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
