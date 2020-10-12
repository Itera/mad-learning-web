import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const Button = styled.button`
  padding: ${usingTypography((t) => t.scaleSpacing(5))}px;
  background-color: ${usingColors((c) => c.SURFACE.PRIMARY)};
  border: 1px solid ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
  font-size: ${usingTypography((t) => t.scaleFont(-3))}px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
