import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const Wrapper = styled.nav`
  display: flex;
  padding: 0 ${usingTypography((t) => t.scaleSpacing(7))}px;
  padding-top: ${usingTypography((t) => t.scaleSpacing(3))}px;
  padding-bottom: ${usingTypography((t) => t.scaleSpacing(1))}px;
  box-shadow: 0 1px 4px ${usingColors((c) => c.ON.PRIMARY)};
`;

export const Icon = styled.img`
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px 0 0;
  width: 100px;
  height: 60px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  padding-top: 2px;
`;

export const MenuItem = styled.li`
  margin-left: ${usingTypography((t) => t.scaleSpacing(8))}px;

  &:first-of-type {
    padding-left: 0;
  }
`;
