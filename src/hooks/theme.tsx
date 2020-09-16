import React, { useContext, ReactNode } from 'react';
import {
  ThemeContext,
  ThemeProvider as StyledThemeProvider,
  ThemeConsumer as StyledThemeConsumer,
} from 'styled-components';

import { modularScale } from '../utils/typography';
import { ColorPalette } from '../config/colors';
import { TypographyOptions } from '../config/typography';

type Typography = {
  scaleFont: (level: number) => number;
  scaleSpacing: (level: number) => number;
};

export type Theme = {
  colors: ColorPalette;
  typography: Typography;
};

export type ThemeProps = {
  theme: Theme;
};

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

export function useColors(): ColorPalette {
  return useTheme().colors;
}

export function useTypography(): Typography {
  return useTheme().typography;
}

type ThemeProviderProps = {
  children: ReactNode;
  options: {
    colors: ColorPalette;
    typography: TypographyOptions;
  };
};

export function ThemeProvider({ children, options }: ThemeProviderProps) {
  const { colors, typography } = options;
  const { fontScale, spacingScale } = typography;
  const theme: Theme = {
    colors,
    typography: {
      scaleFont: (level: number) => modularScale(level, fontScale),
      scaleSpacing: (level: number) => modularScale(level, spacingScale),
    },
  };
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export const ThemeConsumer = StyledThemeConsumer;
