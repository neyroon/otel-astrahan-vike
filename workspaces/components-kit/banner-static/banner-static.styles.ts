import { Button, Image } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const BannerStaticBox = styled.div`
  border-radius: 28px;
  position: relative;
  height: 320px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 660px;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    border-radius: 28px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% - 30px);
  transform: translateY(-50%) translateX(-50%);

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 40px;
    bottom: 40px;
    max-width: 958px;
    top: auto;
    transform: none;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 16px;
  }
`;
export const StyledButton = styled(Button)`
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 600px;
  }
`;
