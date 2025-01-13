import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const InformationDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 40px;
  }
`;
