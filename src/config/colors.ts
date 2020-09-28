const BLACK = '#424041';
const BLUE = '#4FC3E7';
const GRAY_LIGHT = '#E6E6E6';
const GRAY_DARK = '#424041';
const RED = '#D20A10';
const WHITE = 'white';

const COLORS = {
  ON: {
    PRIMARY: BLACK,
    PRIMARY_ACCENT: RED,
    SECONDARY: WHITE,
    SECONDARY_ACCENT: BLUE,
    TERTIARY: WHITE,
  },
  SURFACE: {
    PRIMARY: WHITE,
    PRIMARY_VARIANT: GRAY_LIGHT,
    SECONDARY: GRAY_DARK,
    TERTIARY: BLUE,
  },
  BACKGROUND: WHITE,
};

export type ColorPalette = typeof COLORS;

export default COLORS;
