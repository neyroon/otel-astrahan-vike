import { Typography } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

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

export const StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 28px;
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

export const GradientBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 21.51%,
    rgba(0, 0, 0, 0.8) 53.42%
  );

  border-radius: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 28px;
    background: linear-gradient(
        124.78deg,
        rgba(10, 5, 36, 0) 43.66%,
        rgba(10, 5, 36, 0.24) 90.82%
      ),
      linear-gradient(
        180deg,
        rgba(10, 5, 36, 0.32) 9.81%,
        rgba(10, 5, 36, 0) 21.69%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 30.7%),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 24.39%,
        rgba(0, 0, 0, 0.6) 64.18%
      );
  }
`;
