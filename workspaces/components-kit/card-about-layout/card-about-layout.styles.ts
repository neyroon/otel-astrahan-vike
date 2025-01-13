import { Button } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const CardAboutLayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > *:nth-child(2) {
    flex-direction: row-reverse;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 26px;
    flex-direction: row;

    & > *:first-child {
      align-self: flex-end;
    }

    & > *:nth-child(2) {
      height: 692px;
      flex-direction: column;
    }
  }
`;

export const WithButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    & > *:first-child {
      height: 586px;
    }

    & > :last-child {
      width: 100%;
    }
  }
`;

export const StyledButton = styled(Button)`
  display: none;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
  }
`;
