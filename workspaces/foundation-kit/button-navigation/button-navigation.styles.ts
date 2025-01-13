import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const ButtonNavigationBox = styled.button`
  background-color: ${allColors.WHITE};
  cursor: pointer;
  outline: none;
  border: 0;
  width: 48px;
  height: 48px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ withBorder }) => (withBorder ? `2px solid #45454533` : "none")};

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 64px;
    height: 64px;
  }
`;
