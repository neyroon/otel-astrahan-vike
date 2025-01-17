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
  CardReviewLayoutBox,
} from "./card-review-layout.styles";

export const CardReviewLayout: FunctionalComponent = ({ children }) => {
  const sliderRef = useRef<null | SwiperRef>(null);
  const elements = toChildArray(children);

  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <CardReviewLayoutBox>
      <Swiper
        slidesPerView={1.2}
        modules={[Scrollbar]}
        autoHeight
        breakpoints={{ 1024: { slidesPerView: 3 } }}
        spaceBetween={26}
        span={700}
        scrollbar
        initialSlide={0}
        ref={sliderRef}
      >
        {elements.map((el) => (
          <SwiperSlide>{el}</SwiperSlide>
        ))}
      </Swiper>
      <ButtonNavigationLeft
        aria-label="Навигация влево"
        withBorder
        onClick={onButtonPrevClick}
      >
        <ArrowLeftIcon />
      </ButtonNavigationLeft>
      <ButtonNavigationRight
        aria-label="Навигация вправо"
        withBorder
        onClick={onButtonNextClick}
      >
        <ArrowRightIcon />
      </ButtonNavigationRight>
    </CardReviewLayoutBox>
  );
};
