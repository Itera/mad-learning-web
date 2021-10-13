const MIDNIGHT = '#000000';
const WHITE = '#FFFFFF';
const LOBSTER = '#FF4B33';
const SEA = '#0029FF';
const GRAY_LIGHT = '#E6E6E6';
const GRAY_DARK = '#424041';
const RED = '#FF0000';

const COLORS = {
  ON: {
    PRIMARY: MIDNIGHT,
    PRIMARY_ACCENT: LOBSTER,
    SECONDARY: WHITE,
    SECONDARY_ACCENT: SEA,
    TERTIARY: WHITE,
    ERROR: RED,
  },
  SURFACE: {
    PRIMARY: WHITE,
    PRIMARY_VARIANT: GRAY_LIGHT,
    SECONDARY: GRAY_DARK,
    TERTIARY: SEA,
  },
  BACKGROUND: WHITE,
};

export type ColorPalette = typeof COLORS;

export default COLORS;
