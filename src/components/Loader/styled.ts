import styled from 'styled-components';

import { ThemeProps } from '../../hooks/theme';

type SpinnerProps = {
  size: number;
  isCentered: boolean;
} & ThemeProps;

export const Spinner = styled.div<SpinnerProps>`
  border-radius: 50%;
  animation: ${({ theme }: ThemeProps) =>
    theme.styling.createAnimation('spin 1.3s linear infinite')};

  ${({ size, theme }: SpinnerProps) => {
    const boxSize = theme.typography.scaleFont(size);
    const borderSize = boxSize / theme.typography.scaleFont(-2);
    const borderFillColor = theme.colors.SURFACE.PRIMARY_VARIANT;
    const borderHighlightColor = theme.colors.ON.PRIMARY_ACCENT;
    return `
      width: ${boxSize}px;
      height: ${boxSize}px;
      border: ${borderSize}px solid ${borderFillColor};
      border-top: ${borderSize}px solid ${borderHighlightColor};
    `;
  }};
  ${({ isCentered }) => isCentered && 'margin: 0 auto'};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
