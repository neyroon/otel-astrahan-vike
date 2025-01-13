import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const BannerBox = styled.div`
  position: relative;
  border-radius: 28px;
  width: calc(100% + 30px);
  margin-left: -15px;
  margin-right: -15px;

  height: 660px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin: 0;
    width: 100%;
  }

  & .swiper {
    border-radius: 28px;

    & .swiper-pagination {
      display: flex;
      align-items: center;
      width: auto;
      left: 15px;
      bottom: 116px;

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
  bottom: 96px;
  right: 15px;
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    bottom: 40px;
    right: 40px;
  }
`;
