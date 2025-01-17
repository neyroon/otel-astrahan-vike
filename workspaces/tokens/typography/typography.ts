import { typeface } from "./typeface";
import { AllTypo, FontMap, GetTypographyToken } from "./types";

export const allTypography: FontMap<AllTypo> = {
  "80": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 80,
      lineHeight: 75,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 32,
      lineHeight: 100,
    },
  },
  "64": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 64,
      lineHeight: 120,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 48,
      lineHeight: 120,
    },
  },
  "48": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 48,
      lineHeight: 120,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 20,
      lineHeight: 130,
    },
  },
  "32": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 32,
      lineHeight: 120,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 20,
      lineHeight: 130,
    },
  },
  "28": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 28,
      lineHeight: 120,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 18,
      lineHeight: 130,
    },
  },
  "20": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 20,
      lineHeight: 120,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 20,
      lineHeight: 120,
    },
  },
  "18": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 18,
      lineHeight: 160,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 13,
      lineHeight: 160,
    },
  },
  "16": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 16,
      lineHeight: 150,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 13,
      lineHeight: 160,
    },
  },
  "16-bold": {
    desktop: {
      weight: typeface.MEDIUM.weight,
      size: 16,
      lineHeight: 120,
    },
    mobile: {
      weight: typeface.MEDIUM.weight,
      size: 16,
      lineHeight: 120,
    },
  },
  "15": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 15,
      lineHeight: 133,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 15,
      lineHeight: 133,
    },
  },
  "12": {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 12,
      lineHeight: 150,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 12,
      lineHeight: 150,
    },
  },
  inherit: {
    desktop: {
      weight: "inherit",
      size: "inherit",
      lineHeight: "inherit",
    },
    mobile: {
      weight: "inherit",
      size: "inherit",
      lineHeight: "inherit",
    },
  },
};

export const getDesktopTypographyToken: GetTypographyToken = (typoName) =>
  allTypography[typoName]["desktop"];

export const getMobileTypographyToken: GetTypographyToken = (typoName) =>
  allTypography[typoName]["mobile"];
