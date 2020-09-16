import styled from 'styled-components';

import { ThemeProps } from '../../hooks/theme';

export const Wrapper = styled.nav`
  display: flex;
  padding: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(4)}px 0;
`;

export const Icon = styled.img`
  margin-right: 3vw;
  padding: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(4)}px 0 0;
  width: 100px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: ${({ theme }: ThemeProps) =>
    `${theme.typography.scaleSpacing(2)}px`};

  &:first-of-type {
    padding-left: 0;
  }

  & > a {
    color: ${({ theme }: ThemeProps) => `${theme.colors.ON.PRIMARY}`};
    background-color: transparent;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: ${({ theme }: ThemeProps) => `${theme.colors.ON.PRIMARY_VARIANT}`};
    }
  }
`;
