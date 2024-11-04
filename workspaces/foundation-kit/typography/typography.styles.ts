import {
  allTypography,
  breakpoints,
  Colors,
  FontByDevice,
  TYPEFACE_FONT_FAMILY,
} from "../../tokens";
import { styled } from "@linaria/react";
import { MixinsMap, Size } from "./types";

export const fontMixins: MixinsMap<Size, FontByDevice> = {
  "big-text": allTypography.BIG_TEXT,
  "normal-text": allTypography.NORMAL_TEXT,
};

const setUnits = (value: number | string, unit: string) =>
  typeof value === "number" ? `${value}${unit}` : value;

export const TypographyBox = styled.span<{ $size: Size; $color: Colors }>`
  font-feature-settings: normal;
  margin: 0;
  padding: 0;
  font-family: ${TYPEFACE_FONT_FAMILY};
  vertical-align: baseline;

  color: ${({ $color }) => `${$color}`};

  font-weight: ${({ $size }) => fontMixins[$size].mobile.weight};
  font-size: ${({ $size }) => setUnits(fontMixins[$size].mobile.size, "px")};
  line-height: ${({ $size }) =>
    setUnits(fontMixins[$size].mobile.lineHeight, "%")};
  letter-spacing: ${({ $size }) =>
    setUnits(fontMixins[$size].mobile.tracking, "em")};

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    font-weight: ${({ $size }) => fontMixins[$size].desktop.weight};
    font-size: ${({ $size }) => setUnits(fontMixins[$size].desktop.size, "px")};
    line-height: ${({ $size }) =>
      setUnits(fontMixins[$size].desktop.lineHeight, "%")};
    letter-spacing: ${({ $size }) =>
      setUnits(fontMixins[$size].desktop.tracking, "em")};
  }
`;
