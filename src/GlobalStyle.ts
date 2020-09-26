import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from './hooks/theme';

export const UBIQUITOUS_ANIMATION = 'fade-in 0.3s ease-in';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ApexNew';
    font-style: 'normal';
    font-weight: 400;
    src:
      local('ApexNew-Book'),
      url('./assets/fonts/ApexNew-Book.otf') format('opentype');
  }

  @font-face {
    font-family: 'ApexNew-Bold';
    font-style: 'normal';
    font-weight: 700;
    src:
      local('ApexNew-Bold'),
      url('./assets/fonts/ApexNew-Bold.otf') format('opentype');
  }

  body {
    margin: 0;
    color: ${({ theme }: ThemeProps) => theme.colors.ON.PRIMARY};
    background-color: ${({ theme }: ThemeProps) => theme.colors.BACKGROUND};
    font-family: 'ApexNew', 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: ${({ theme }) => theme.typography.scaleFont(1)}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-numeric:lining-nums;

    * {
      box-sizing: border-box;
      animation: ${UBIQUITOUS_ANIMATION};
    }
  }

  a {
    color: ${({ theme }: ThemeProps) => `${theme.colors.ON.PRIMARY}`};
    background-color: transparent;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: ${({ theme }: ThemeProps) => `${theme.colors.ON.PRIMARY_ACCENT}`};
      transition: 0.3s ease-out color;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ${({ theme }: ThemeProps) => theme.styling.global};
`;

export default GlobalStyle;
