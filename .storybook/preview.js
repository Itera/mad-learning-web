import React from 'react';
import styled from 'styled-components';
import { usingColors, usingTypography } from 'src/hooks/theme';


/*
export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
*/

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}