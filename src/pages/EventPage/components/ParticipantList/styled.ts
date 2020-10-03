import styled from 'styled-components';

import { ThemeProps } from '../../../../hooks/theme';

export const Container = styled.ul`
  padding: 0;
  list-style-type: none;
  line-height: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(9)}px;
`;
