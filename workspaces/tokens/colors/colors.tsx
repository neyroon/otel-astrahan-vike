import { Colors } from "./types";

export const allColors = {
  MAIN_BUTTON: "#636A25",
  PRIMARY_BUTTON: "#F4F3F1",
  HOVER_BUTTON: "#78812D",
  ACTIVE_BUTTON: "#5C6222",
  CONTENT_PRIMARY: "#292929",
  DATE_INPUT: "#808080",
  WHITE: "#ffffff",
  GRAY: "#454545",
  DARK_GRAY: "#F1F3F6",
  COLUMBIA_BLUE: "#D1DBE4",
  STUB: "#F4F3F1",
  BLACK: "#000000",
  INHERIT: "inherit",
};

export const colors: Record<Colors, string> = {
  "content-primary": allColors.CONTENT_PRIMARY,
  "main-button": allColors.MAIN_BUTTON,
  "hover-button": allColors.HOVER_BUTTON,
  "active-button": allColors.ACTIVE_BUTTON,
  "date-input": allColors.DATE_INPUT,
  inherit: allColors.INHERIT,
  white: allColors.WHITE,
  gray: allColors.GRAY,
  "dark-gray": allColors.DARK_GRAY,
  "columbia-blue": allColors.COLUMBIA_BLUE,
  black: allColors.BLACK,
  stub: allColors.STUB,
};
