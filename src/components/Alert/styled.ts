import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const Container = styled.article`
  padding: ${usingTypography((t) => t.scaleSpacing(6))}px;

  ${usingColors(
    (c) => `
      color: ${c.ON.SECONDARY};
      background-color: ${c.SURFACE.SECONDARY};
  `
  )}

  & a {
    color: ${usingColors((c) => c.ON.SECONDARY)};
    text-decoration: underline;

    &:hover {
      color: ${usingColors((c) => c.ON.SECONDARY_ACCENT)};
    }
  }
`;
