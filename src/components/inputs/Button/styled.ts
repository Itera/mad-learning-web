import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

type ButtonProps = {
  variant?: 'normal' | 'highlight';
};

export const Button = styled.button<ButtonProps>`
  padding: ${usingTypography((t) => t.scaleSpacing(5))}px;
  background-color: ${usingColors((c) => c.SURFACE.PRIMARY)};
  border: 1px solid ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
  font-size: ${(props) => {
    const variant = props.variant ?? 'normal';
    const fontScale = -3 + (variant === 'highlight' ? 4 : 0);
    return `${usingTypography((t) => t.scaleFont(fontScale))(props)}px;`;
  }};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
Button.defaultProps = {
  type: 'button',
};
