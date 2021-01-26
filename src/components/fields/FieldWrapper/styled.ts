import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const FieldWrapper = styled.div`
  width: 100%;
  max-width: ${usingTypography((t) => t.scaleSpacing(18))}px;
  margin-bottom: ${usingTypography((t) => t.scaleSpacing(7))}px;
`;
