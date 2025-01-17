import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import { Typography } from "../../foundation-kit";
import { Image } from "../../foundation-kit/image";

export const CardServiceBox = styled.div`
  padding: 26px;
  border-radius: 28px;
  position: relative;
  height: 280px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 380px;
  }
`;

export const StyledImage = styled(Image)`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  img {
    border-radius: 28px;
  }
`;

export const CardServiceText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  max-width: 470px;
  height: 100%;
`;

export const Title = styled(Typography)`
  z-index: 1;
`;

export const Subtitle = styled(Typography)`
  opacity: 70%;
  z-index: 1;
`;
