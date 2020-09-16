const BLACK = '#424041';
const RED = '#D20A10';
const GRAY = '#C2C0C3';
const BLUE = '#4FC3E7';
const WHITE = 'white';

const COLORS = {
  ON: {
    PRIMARY: BLACK,
    PRIMARY_VARIANT: RED,
  },
  SURFACE: {
    SECONDARY: GRAY,
    SECONDARY_VARIANT: BLUE,
  },
  BACKGROUND: WHITE,
};

export type ColorPalette = typeof COLORS;

export default COLORS;
