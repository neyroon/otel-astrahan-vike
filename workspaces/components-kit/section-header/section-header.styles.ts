import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";
import { Section } from "../section";

export const SectionHeaderBox = styled(Section)`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0;
  z-index: 100;
  background-color: ${allColors.WHITE};
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    position: sticky;
  }
`;
