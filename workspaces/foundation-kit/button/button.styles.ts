import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";
import { ButtonSize } from "./types";

export const ButtonBox = styled.button<{ size: ButtonSize }>`
  width: fit-content;
  appearance: none;
  background: ${({ design }) =>
    design === "primary"
      ? `${allColors.MAIN_BUTTON}`
      : `${allColors.PRIMARY_BUTTON}`};
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  color: ${({ design }) =>
    design === "primary" ? `${allColors.WHITE}` : `${allColors.MAIN_BUTTON}`};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: ${({ size }) => (size === "s" ? "16px 32px" : "20px 32px")};
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: ${({ size }) => (size === "s" ? "22px 32px" : "30px 32px")};
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    background-color: ${({ design }) =>
      design === "primary" ? `${allColors.HOVER_BUTTON}` : `#DDDAD4`};
  }

  &:active {
    background-color: ${({ design }) =>
      design === "primary" ? `${allColors.ACTIVE_BUTTON}` : `#DDDAD4`};
  }
`;
