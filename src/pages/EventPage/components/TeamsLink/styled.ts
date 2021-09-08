import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const Container = styled.ul`
  padding: 0;
  list-style-type: none;
  line-height: ${usingTypography((t) => t.scaleSpacing(9))}px;
  text-decoration: underline;
`;
