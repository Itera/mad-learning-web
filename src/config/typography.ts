import { ModularScale } from 'src/utils/typography';

export type TypographyOptions = {
  fontScale: ModularScale;
  spacingScale: ModularScale;
};

const TYPOGRAPHY_OPTIONS: TypographyOptions = {
  fontScale: {
    base: 20,
    ratio: 1.125,
  },
  spacingScale: {
    base: 4,
    ratio: 1.333,
  },
};

export default TYPOGRAPHY_OPTIONS;
