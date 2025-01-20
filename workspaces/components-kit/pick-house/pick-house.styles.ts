import { Button, Image } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const PickHouseBox = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  user-select: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 800px;
  }
`;

export const Background = styled(Image)`
  border-radius: 28px;
  img {
    border-radius: 28px;
    width: 2275px;
    height: 1300px;
    object-fit: initial;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  width: 2275px;
  height: 1286px;
  left: 0;
  top: 0;

  & g {
    & path {
      opacity: 0;
    }

    &:hover {
      cursor: pointer;
      path {
        opacity: 0.4;
      }
    }
  }
`;

export const GuideBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.7);
`;

export const GuideText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const GuideIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    bottom: 40px;
  }
`;
