import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const FieldWrapper = styled.div`
  max-width: ${usingTypography((t) => t.scaleSpacing(16))}px;
  margin-bottom: ${usingTypography((t) => t.scaleSpacing(7))}px;
`;
