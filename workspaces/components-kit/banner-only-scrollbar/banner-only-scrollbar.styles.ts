import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const BannerBox = styled.div`
  position: relative;
  width: calc(100% + 15px);
  padding-bottom: 40px;
  margin-right: -15%;
  margin-top: 14px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin: 0;
    margin-top: 40px;
    margin-right: calc(40% - 52px);
    width: calc(100% + 40% - 52px);
  }

  & .swiper {
    position: static;

    & .swiper-scrollbar {
      display: block;
      background-color: ${allColors.COLUMBIA_BLUE};
      height: 3px;
      border-radius: 10px;
      bottom: 0;
      left: 0;
      right: 0;
      width: calc(100% - 15px);

      & .swiper-scrollbar-drag {
        background-color: ${allColors.MAIN_BUTTON};
        border-radius: 10px;
      }
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 96px;
  right: 15px;
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    bottom: 40px;
    right: 40px;
  }
`;
