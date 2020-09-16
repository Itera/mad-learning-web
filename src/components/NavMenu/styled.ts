import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 4px;

  &:first-of-type {
    padding-left: 0;
  }

  & > a {
    color: #424041;
    background-color: transparent;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: #d20a10;
    }
  }
`;
