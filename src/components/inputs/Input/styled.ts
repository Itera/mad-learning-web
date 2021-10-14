import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

type InputProps = {
  errorState?: boolean;
};

export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px;
  border: 1px solid
    ${({ errorState }: InputProps) =>
      usingColors((c) => (errorState ? c.ON.ERROR : c.ON.PRIMARY))};
  font-family: inherit;
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  font-variant-numeric: lining-nums;
`;
