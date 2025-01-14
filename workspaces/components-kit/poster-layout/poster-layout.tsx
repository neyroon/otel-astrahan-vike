import { ArrowLeftIcon, ArrowRightIcon } from "@foundation";
import { FunctionalComponent, toChildArray } from "preact";
import { useRef } from "preact/hooks";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  ButtonNavigationLeft,
  ButtonNavigationRight,
  PosterLayoutBox,
} from "./poster-layout.styles";

export const PosterLayout: FunctionalComponent = ({ children }) => {
  const sliderRef = useRef<null | SwiperRef>(null);
  const elements = toChildArray(children);

  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <PosterLayoutBox>
      <Swiper
        slidesPerView={1.2}
        breakpoints={{
          1280: { slidesPerView: 3.4, initialSlide: 1 },
          1024: { slidesPerView: 2.4, initialSlide: 1 },
        }}
        scrollbar
        modules={[Scrollbar]}
        centeredSlides={false}
        spaceBetween={26}
        initialSlide={0}
        ref={sliderRef}
      >
        {elements.map((el) => (
          <SwiperSlide>{el}</SwiperSlide>
        ))}
      </Swiper>
      <ButtonNavigationLeft
        aria-label="Навигация влево"
        onClick={onButtonPrevClick}
      >
        <ArrowLeftIcon />
      </ButtonNavigationLeft>
      <ButtonNavigationRight
        aria-label="Навигация вправо"
        onClick={onButtonNextClick}
      >
        <ArrowRightIcon />
      </ButtonNavigationRight>
    </PosterLayoutBox>
  );
};
