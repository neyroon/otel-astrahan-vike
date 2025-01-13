import { Button, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import { Image } from "../../foundation-kit/image";

export const BannerSlideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  position: relative;
  border-radius: 28px;
  z-index: 2;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 660px;
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;

  & img {
    border-radius: 28px;
  }
`;

export const Description = styled(Typography)`
  opacity: 70%;
`;

export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
  max-width: 100%;
  position: absolute;
  bottom: 101px;
  left: 15px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 40px;
    bottom: 40px;
    max-width: 752px;
  }
`;

export const StyledButton = styled(Button)`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-top: 28px;
    width: 600px;
    display: block;
  }
`;
