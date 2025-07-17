import { ArrowLeftIcon, ArrowRightIcon, ButtonNavigation } from "@foundation";
import { FunctionComponent, toChildArray } from "preact";
import { useRef } from "preact/hooks";
import "swiper/css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { BannerBox, ButtonBox } from "./banner-half.styles";

export interface BannerProps {}

export const BannerHalf: FunctionComponent<BannerProps> = ({ children }) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const elements = toChildArray(children);

  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  const slideChange = (e) => {
    const video = e.el.querySelector("video");
    if (video) video.pause();
  };

  return (
    <BannerBox>
      <Swiper
        spaceBetween={16}
        speed={700}
        loop
        ref={sliderRef}
        onSlideChange={slideChange}
      >
        {elements.map((el) => (
          <SwiperSlide>{el}</SwiperSlide>
        ))}
      </Swiper>
      <ButtonBox>
        <ButtonNavigation
          aria-label="Навигация влево"
          onClick={onButtonPrevClick}
        >
          <ArrowLeftIcon />
        </ButtonNavigation>
        <ButtonNavigation
          aria-label="Навигация вправо"
          onClick={onButtonNextClick}
        >
          <ArrowRightIcon />
        </ButtonNavigation>
      </ButtonBox>
    </BannerBox>
  );
};
