import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const BannerFullBox = styled.div`
  position: relative;
  border-radius: 28px;
  width: calc(100% + 15px);
  margin-right: -15px;
  padding-bottom: 28px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin: 0;
    width: 100%;
    height: 660px;
    padding: 0;
  }

  & .swiper-slide {
    height: auto;
  }

  & .swiper {
    position: static;
    border-radius: 28px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
      border-radius: 28px;
    }

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

      @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        display: none;
      }
    }

    & .swiper-pagination {
      display: none;

      @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        display: flex;
        align-items: center;
        width: auto;
        left: auto;
        right: 223px;
        color: ${allColors.WHITE};
        font-size: 20px;
        font-weight: 400;
        line-height: 120%;
        opacity: 60%;
        bottom: 60px;
      }

      & span {
        &:before {
          content: "0";
        }
      }
    }
  }
`;

export const ButtonBox = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: flex;
    bottom: 40px;
    right: 40px;
    align-items: center;
    gap: 15px;
    position: absolute;
    z-index: 1;
  }
`;
