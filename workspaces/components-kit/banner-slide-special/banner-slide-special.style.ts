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
    transform: scaleX(-1);
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
    margin-top: 10px;
    width: 600px;
    display: block;
  }
`;
export const GradientBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;

  border-radius: 28px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const LineThough = styled(Typography)`
  text-decoration: line-through;
  margin: 10px;
  text-decoration-color: red;
`;
