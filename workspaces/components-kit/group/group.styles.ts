import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    flex-direction: row;

    & > :first-child {
      width: calc(100% - 26px - 435px);
    }

    & > :nth-child(2) {
      width: 435px;
    }
  }
`;
