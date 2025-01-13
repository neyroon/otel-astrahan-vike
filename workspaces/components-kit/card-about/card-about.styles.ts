import { Typography } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import { Image } from "../../foundation-kit/image";

export const CardAboutBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-radius: 28px;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 32px;
    flex-direction: column;
    align-items: baseline;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  width: 169px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    gap: 16px;
    width: auto;
    align-items: end;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 287px;
  img {
    border-radius: 28px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
  }
`;

export const StyledTypography = styled(Typography)`
  opacity: 60%;
`;
