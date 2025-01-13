import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const CardServiceLayoutBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    gap: 26px;
  }
`;

export const CardServiceFirstBlock = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 26px;
    width: calc(58% - 13px);
  }
`;

export const CardServiceFirstBlockTop = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 26px;
    flex-direction: row;

    & > * {
      width: calc(50% - 13px);
    }
  }
`;

export const CardServiceSecondBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  & > * {
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 26px;
    width: calc(42% - 13px);
    & > * {
      height: 100%;
    }
  }
`;
