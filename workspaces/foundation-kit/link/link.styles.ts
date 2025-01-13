import { styled } from "@linaria/react";
import {
  allColors,
  allTypography,
  breakpoints,
  colors,
  FontByDevice,
  TYPEFACE_FONT_FAMILY,
} from "@tokens";
import { MixinsMap, Size } from "../typography/types";

export const fontMixins: MixinsMap<Size, FontByDevice> = {
  "80": allTypography["80"],
  "64": allTypography["64"],
  "48": allTypography["48"],
  "32": allTypography["32"],
  "28": allTypography["28"],
  "20": allTypography["20"],
  "18": allTypography["18"],
  "16": allTypography["16"],
  "16-bold": allTypography["16-bold"],
  "15": allTypography["15"],
  "12": allTypography["12"],
};

const setUnits = (value: number | string, unit: string) =>
  typeof value === "number" ? `${value}${unit}` : value;

export const LinkBox = styled.a`
  font-feature-settings: normal;
  margin: 0;
  padding: 0;
  font-family: ${TYPEFACE_FONT_FAMILY};
  vertical-align: baseline;

  color: ${({ $color }) => `${colors[$color]}`};
  cursor: pointer;
  font-weight: ${({ $size }) => fontMixins[$size].mobile.weight};
  font-size: ${({ $size }) => setUnits(fontMixins[$size].mobile.size, "px")};
  line-height: ${({ $size }) =>
    setUnits(fontMixins[$size].mobile.lineHeight, "%")};

  &:hover {
    color: ${allColors.MAIN_BUTTON};
  }

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    font-weight: ${({ $size }) => fontMixins[$size].desktop.weight};
    font-size: ${({ $size }) => setUnits(fontMixins[$size].desktop.size, "px")};
    line-height: ${({ $size }) =>
      setUnits(fontMixins[$size].desktop.lineHeight, "%")};
  }
`;
