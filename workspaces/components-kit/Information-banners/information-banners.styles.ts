import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const InformationBannersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 60%;
    gap: 40px;
    margin-bottom: 30px;
  }
`;
