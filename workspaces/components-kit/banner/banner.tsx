import { ArrowLeftIcon, ArrowRightIcon, ButtonNavigation } from "@foundation";
import { FunctionComponent, toChildArray } from "preact";
import { useRef } from "preact/hooks";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { BannerBox, ButtonBox } from "./banner-styles";

export interface BannerProps {}

export const Banner: FunctionComponent<BannerProps> = ({ children }) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const elements = toChildArray(children);

  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <BannerBox>
      <Swiper
        spaceBetween={16}
        loop
        pagination
        modules={[Pagination]}
        ref={sliderRef}
      >
        {elements.map((el) => (
          <SwiperSlide>{el}</SwiperSlide>
        ))}
      </Swiper>
      <ButtonBox>
        <ButtonNavigation onClick={onButtonPrevClick}>
          <ArrowLeftIcon />
        </ButtonNavigation>
        <ButtonNavigation onClick={onButtonNextClick}>
          <ArrowRightIcon />
        </ButtonNavigation>
      </ButtonBox>
    </BannerBox>
  );
};
