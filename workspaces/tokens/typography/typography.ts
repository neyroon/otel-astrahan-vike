import { typeface } from './typeface';
import {
  AllTypo,
  FontMap,
  GetTypographyToken,
  HeadingTypography,
  InterfaceTypography,
  Typography,
} from './types';

export const headingTypography: FontMap<HeadingTypography> = {
  HEADING1: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 58,
      lineHeight: 90,
      tracking: -0.06,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 45,
      lineHeight: 85,
      tracking: -0.06,
    },
  },
  HEADING2: {
    desktop: {
      weight: typeface.LIGHT.weight,
      size: 48,
      lineHeight: 100,
      tracking: -0.06,
    },
    mobile: {
      weight: typeface.LIGHT.weight,
      size: 32,
      lineHeight: 100,
      tracking: -0.06,
    },
  },
  HEADING3: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 32,
      lineHeight: 110,
      tracking: -0.04,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 24,
      lineHeight: 110,
      tracking: -0.05,
    },
  },
  HEADING4: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 24,
      lineHeight: 110,
      tracking: -0.05,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 20,
      lineHeight: 110,
      tracking: -0.05,
    },
  },
};

export const interfaceTypography: FontMap<InterfaceTypography> = {
  BIG_TEXT: {
    desktop: {
      weight: typeface.LIGHT.weight,
      size: 20,
      lineHeight: 140,
      tracking: -0.05,
    },
    mobile: {
      weight: typeface.LIGHT.weight,
      size: 18,
      lineHeight: 130,
      tracking: -0.06,
    },
  },
  NORMAL_TEXT: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 18,
      lineHeight: 110,
      tracking: -0.04,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 16,
      lineHeight: 110,
      tracking: -0.04,
    },
  },

  BUTTON_TEXT: {
    desktop: {
      weight: typeface.MEDIUM.weight,
      size: 16,
      lineHeight: 100,
      tracking: -0.03,
    },
    mobile: {
      weight: typeface.MEDIUM.weight,
      size: 16,
      lineHeight: 100,
      tracking: -0.03,
    },
  },
  INHERIT: {
    desktop: {
      weight: 'inherit',
      size: 'inherit',
      lineHeight: 'inherit',
      tracking: 'inherit',
    },
    mobile: {
      weight: 'inherit',
      size: 'inherit',
      lineHeight: 'inherit',
      tracking: 'inherit',
    },
  },
};

export const typography: Typography = {
  interface: interfaceTypography,

  heading: headingTypography,
};

export const allTypography: FontMap<AllTypo> = {
  ...interfaceTypography,
  ...headingTypography,
};

export const getDesktopTypographyToken: GetTypographyToken = (typoName) =>
  allTypography[typoName]['desktop'];

export const getMobileTypographyToken: GetTypographyToken = (typoName) =>
  allTypography[typoName]['mobile'];
