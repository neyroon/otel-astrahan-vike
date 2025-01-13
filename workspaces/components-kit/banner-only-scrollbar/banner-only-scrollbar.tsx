import { FunctionComponent, toChildArray } from "preact";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerBox } from "./banner-only-scrollbar.styles";

export interface BannerProps {}

export const BannerOnlyScrollbar: FunctionComponent<BannerProps> = ({
  children,
}) => {
  const elements = toChildArray(children);

  return (
    <BannerBox>
      <Swiper
        spaceBetween={26}
        slidesPerView={1.2}
        breakpoints={{ 1024: { slidesPerView: 2.5 } }}
        scrollbar
        modules={[Scrollbar]}
      >
        {elements.map((el) => (
          <SwiperSlide>{el}</SwiperSlide>
        ))}
      </Swiper>
    </BannerBox>
  );
};
