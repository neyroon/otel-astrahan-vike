import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const AttendanceCardsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 32px;
    width: 70%;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    gap: 32px;
    width: 60%;
  }
`;
