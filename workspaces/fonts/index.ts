import { TYPEFACE_UI } from "../tokens";
import StolzMedium from "./stolzl_medium.woff";
import StolzRegular from "./stolzl_regular.woff";

export const cssFonts = `
  @font-face {
    font-family: ${TYPEFACE_UI};
    font-display: swap;
    font-weight: 400;
    src: url(${StolzRegular}) format(woff);
  }

  @font-face {
    font-family: ${TYPEFACE_UI};
    font-display: swap;
    font-weight: 500;
    src: url(${StolzMedium}) format(woff);
  }

`;
