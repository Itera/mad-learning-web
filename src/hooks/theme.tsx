import React, { useMemo, useContext, ReactNode, Consumer } from 'react';
import {
  ThemeContext,
  ThemeProvider as StyledThemeProvider,
  ThemeConsumer as StyledThemeConsumer,
} from 'styled-components';

import { modularScale } from '../utils/typography';
import { ColorPalette } from '../config/colors';
import { TypographyOptions } from '../config/typography';
import { StylingOptions } from '../config/styling';

type Typography = {
  scaleFont: (level: number) => number;
  scaleSpacing: (level: number) => number;
};

type Styling = {
  global: string;
  createAnimation: (animation: string) => string;
};

export type Theme = {
  colors: ColorPalette;
  typography: Typography;
  styling: Styling;
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

export function usingTypography<V>(
  f: (typography: Typography) => V
): (props: ThemeProps) => V {
  return ({ theme }) => f(theme.typography);
}

export function usingColors<V>(
  f: (colors: ColorPalette) => V
): (props: ThemeProps) => V {
  return ({ theme }) => f(theme.colors);
}

export function usingStyling<V>(
  f: (styling: Styling) => V
): (props: ThemeProps) => V {
  return ({ theme }) => f(theme.styling);
}

type ThemeProviderProps = {
  children: ReactNode;
  options: {
    colors: ColorPalette;
    typography: TypographyOptions;
    styling: StylingOptions;
  };
};

export function ThemeProvider({ children, options }: ThemeProviderProps) {
  const { colors, typography, styling } = options;
  const { fontScale, spacingScale } = typography;

  const globalStyle = useMemo(
    () =>
      styling.animations
        .map(
          ({ name, definition }) => `
            @keyframes ${name} {
              ${definition}
            }
          `
        )
        .join('\n\n'),
    [styling]
  );

  const animations = useMemo(
    () =>
      styling.animations
        .map(({ name, parameters }) => `${name} ${parameters}`)
        .join(', '),
    [styling]
  );

  const theme: Theme = {
    colors,
    typography: {
      scaleFont: (level: number) => modularScale(level, fontScale),
      scaleSpacing: (level: number) => modularScale(level, spacingScale),
    },
    styling: {
      global: globalStyle,
      createAnimation: (animation: string) => `${animations}, ${animation}`,
    },
  };
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export const ThemeConsumer = StyledThemeConsumer as Consumer<Theme>;
