import { FunctionComponent } from "preact";
import { BannerBox } from "./banner-styles";

export interface BannerProps {}

export const Banner: FunctionComponent<BannerProps> = ({ children }) => {
  // const sliderRef = useRef<SwiperRef | null>(null);
  // const elements = toChildArray(children);

  // const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  // const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <BannerBox>
      {children}
      {/* <Swiper
        spaceBetween={16}
        loop
        pagination
        modules={[Pagination]}
        speed={700}
        ref={sliderRef}
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
      </ButtonBox> */}
    </BannerBox>
  );
};
