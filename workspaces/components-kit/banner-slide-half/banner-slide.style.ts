import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import { Image } from "../../foundation-kit/image";

export const BannerSlideBox = styled.div`
  height: 280px;
  position: relative;
  border-radius: 28px;
  z-index: 2;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 580px;
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;

  & img {
    border-radius: 28px;
  }
`;
