import { Button, Image } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const BannerStaticBox = styled.div`
  border-radius: 28px;
  position: relative;
  height: 320px;
  overflow: hidden;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 260px;
  }
`;

export const StyledImage = styled(Image)`
  img {
    border-radius: 28px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% - 30px);
  transform: translateY(-50%) translateX(-50%);

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    left: 40px;
    right: 40px;
    width: auto;
    align-items: center;
    transform: translateY(-50%);
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
