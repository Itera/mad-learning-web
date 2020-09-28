import styled from 'styled-components';
import { ThemeProps } from '../../hooks/theme';

export const Container = styled.article`
  padding: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(6)}px;

  ${({ theme }: ThemeProps) => `
      color: ${theme.colors.ON.SECONDARY};
      background-color: ${theme.colors.SURFACE.SECONDARY};
  `}

  & a {
    color: ${({ theme }: ThemeProps) => theme.colors.ON.SECONDARY};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }: ThemeProps) => theme.colors.ON.SECONDARY_ACCENT};
    }
  }
`;
