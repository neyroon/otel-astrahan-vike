import { ButtonNavigation } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const CardReviewLayoutBox = styled.div`
  width: 100%;
  position: relative;
  margin-right: -15px;
  width: calc(100% + 15px);
  padding-bottom: 28px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-left: -28px;
    margin-right: -28px;
    width: calc(100% + 56px);
    padding: 0;
  }

  .swiper {
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

      @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        display: none;
      }
    }
    .swiper-slide {
      align-self: stretch;
    }
  }
`;

export const ButtonNavigationLeft = styled(ButtonNavigation)`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    position: absolute;
    top: -100px;
    transform: translateY(-50%);
    right: 107px;
    z-index: 1;
  }
`;
export const ButtonNavigationRight = styled(ButtonNavigation)`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    position: absolute;
    top: -100px;
    transform: translateY(-50%);
    right: 28px;
    z-index: 1;
  }
`;
