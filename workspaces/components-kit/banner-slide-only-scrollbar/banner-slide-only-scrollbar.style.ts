import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import { Image } from "../../foundation-kit/image";

export const BannerSlideBox = styled.div`
  border-radius: 28px;
  height: 320px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 510px;
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;

  & img {
    border-radius: 28px;
  }
`;
