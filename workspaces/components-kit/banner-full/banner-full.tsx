import { ArrowLeftIcon, ArrowRightIcon, ButtonNavigation } from "@foundation";
import { FunctionComponent, toChildArray } from "preact";
import { useRef } from "preact/hooks";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { BannerFullBox, ButtonBox } from "./banner-full.styles";

export const BannerFull: FunctionComponent = ({ children }) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const elements = toChildArray(children);

  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <BannerFullBox>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ type: "fraction" }}
        breakpoints={{ 1024: { slidesPerView: 1 } }}
        scrollbar
        modules={[Pagination, Scrollbar]}
        ref={sliderRef}
      >
        {elements.map((el) => (
          <SwiperSlide>{el}</SwiperSlide>
        ))}
      </Swiper>
      <ButtonBox>
        <ButtonNavigation aria-label="Навигация влево" onClick={onButtonPrevClick}>
          <ArrowLeftIcon />
        </ButtonNavigation>
        <ButtonNavigation aria-label="Навигация вправо" onClick={onButtonNextClick}>
          <ArrowRightIcon />
        </ButtonNavigation>
      </ButtonBox>
    </BannerFullBox>
  );
};
