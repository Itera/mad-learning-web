import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 ${usingTypography((t) => t.scaleSpacing(7))}px;
  padding-top: ${usingTypography((t) => t.scaleSpacing(3))}px;
  padding-bottom: ${usingTypography((t) => t.scaleSpacing(1))}px;
  box-shadow: 0 1px 4px ${usingColors((c) => c.ON.PRIMARY)};
`;

export const Icon = styled.img`
  width: 150px;
  max-height: 80px;
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
