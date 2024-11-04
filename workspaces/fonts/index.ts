import { TYPEFACE_UI } from '@tokens/typography';
import StolzMedium from './stolzl_medium.otf';
import StolzRegular from './stolzl_regular.otf';

export const cssFonts = `
  @font-face {
    font-family: ${TYPEFACE_UI};
    font-display: swap;
    font-weight: 400;
    src: url(${StolzRegular}) format('otf');
  }

  @font-face {
    font-family: ${TYPEFACE_UI};
    font-display: swap;
    font-weight: 500;
    src: url(${StolzMedium}) format('otf');
  }

`;
