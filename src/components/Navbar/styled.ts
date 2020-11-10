import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const Wrapper = styled.nav`
  display: flex;
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px
    ${usingTypography((t) => t.scaleSpacing(7))}px;
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
`;

export const MenuItem = styled.li`
  margin-left: ${usingTypography((t) => t.scaleSpacing(8))}px;

  &:first-of-type {
    padding-left: 0;
  }
`;
