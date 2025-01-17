import { Typography } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import { Image } from "../../foundation-kit/image";

export const BannerSlideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 660px;
  position: relative;
  border-radius: 16px;
  z-index: 2;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 28px;
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;

  & img {
    border-radius: 16px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
      border-radius: 28px;
    }
  }
`;

export const TopText = styled(Typography)`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    z-index: 1;
    position: absolute;
    top: 40px;
    left: 40px;
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
  max-width: 68%;
  position: absolute;
  bottom: 172px;
  left: 15px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 40px;
    bottom: 40px;
  }
`;
