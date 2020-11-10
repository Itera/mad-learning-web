import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const FieldLabel = styled.label`
  display: inline-block;
  margin-bottom: ${usingTypography((t) => t.scaleSpacing(2))}px;
  font-weight: bold;
`;
