import { Image } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const CardModalBox = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100% - 20px);
  overflow-y: scroll;
  max-height: 80vh;
  max-height: 80dvh;
  border-radius: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    border-radius: 0;
  }
`;

export const SwiperBox = styled.div`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: flex;
    width: auto;
    gap: 8px;
  }
`;

export const SwiperThumbs = styled.div`
  .swiper {
    height: 640px;
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    width: 100px;
  }

  .swiper-slide-thumb-active {
    border: 2px solid ${allColors.MAIN_BUTTON};
    border-radius: 12px;
    padding: 2px;
    width: 108px;
  }
`;

export const SwiperSlider = styled.div`
  position: relative;
  width: 100%;
  height: 248px;
  .swiper {
    border-radius: 8px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 500px;
    height: 640px;
  }
`;

export const Thumb = styled(Image)`
  cursor: pointer;
  width: 100px;
  & img {
    border-radius: 8px;
  }
`;
export const SlideImage = styled(Image)`
  & img {
    border-radius: 16px;
    height: 248px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
      height: 640px;
      border-radius: 8px;
    }
  }
`;

export const SlideVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  height: 248px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 640px;
    border-radius: 8px;
  }
`;

export const ButtonBoxRight = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 16px;
    right: 16px;
  }
`;

export const ButtonBoxLeft = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 16px;
    right: 16px;
  }
`;

export const ContentBox = styled.div`
  padding: 20px 16px;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: 16px 0;
  }
`;
