import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const CardLayoutBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  & > * {
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: ${({ variant }) => (variant === "m" ? "60px" : "26px")};
    row-gap: 40px;
    flex-direction: row;

    & > * {
      width: ${({ variant }) =>
        variant === "m" ? "calc(50% - 30px)" : "calc(50% - 14px)"};
    }
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_L}px) {
    gap: ${({ variant }) => (variant === "m" ? "60px" : "27px")};
    & > * {
      width: ${({ variant }) =>
        variant === "m" ? "calc(50% - 30px)" : "calc(33% - 14px)"};
    }
  }
`;
