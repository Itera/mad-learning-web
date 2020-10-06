import styled from 'styled-components';

import { ThemeProps } from '../../hooks/theme';

export const Button = styled.button`
  padding: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(5)}px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.SURFACE.PRIMARY};
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.ON.PRIMARY_ACCENT};
  font-size: ${({ theme }: ThemeProps) => theme.typography.scaleFont(-3)}px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
