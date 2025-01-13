import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const BannerBox = styled.div`
  position: relative;
  border-radius: 28px;
  height: 400px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin: 0;
    width: 100%;
    height: 660px;
  }

  & .swiper {
    border-radius: 28px;

    & .swiper-pagination-fraction {
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

    & .swiper-pagination-bullets {
      display: flex;
      align-items: center;
      width: auto;
      left: 15px;
      bottom: 45px;

      & .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background-color: ${allColors.WHITE};
        opacity: 40%;

        &.swiper-pagination-bullet-active {
          width: 8px;
          height: 8px;
          opacity: 100%;
        }
      }

      @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        display: none;
      }
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 25px;
  right: 15px;
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    bottom: 40px;
    right: 40px;
  }
`;
