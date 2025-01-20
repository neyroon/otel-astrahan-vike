import { ArrowLeftIcon, ArrowRightIcon, ButtonNavigation } from "@foundation";
import { useIsMobile } from "@hooks";
import { FunctionalComponent } from "preact";
import { useRef, useState } from "preact/hooks";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ButtonBox,
  CardModalBox,
  ContentBox,
  SlideImage,
  SwiperBox,
  SwiperSlider,
  SwiperThumbs,
  Thumb,
} from "./card-modal.styles";

interface CardModal {
  imageLink1: string;
  imageLink2: string;
  imageLink3: string;
  imageLink4: string;
  imageLink5?: string;
  imageLink6?: string;
}

export const CardModal: FunctionalComponent<CardModal> = ({
  children,
  ...rest
}) => {
  const imageLinks = [
    rest.imageLink1,
    rest.imageLink2,
    rest.imageLink3,
    rest.imageLink4,
    rest.imageLink5,
    rest.imageLink6,
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliderRef = useRef(null);
  const isMobile = useIsMobile();

  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <CardModalBox>
      <SwiperBox>
        {!isMobile && (
          <SwiperThumbs>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={6}
              direction="vertical"
              watchSlidesProgress
              modules={[Thumbs]}
              speed={700}
            >
              {imageLinks.map(
                (link) =>
                  link && (
                    <SwiperSlide>
                      <Thumb sources={[link, link]} />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </SwiperThumbs>
        )}
        <SwiperSlider>
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={16}
            slidesPerView={1}
            modules={[Thumbs]}
            speed={700}
            loop
            ref={sliderRef}
          >
            {imageLinks.map(
              (link) =>
                link && (
                  <SwiperSlide>
                    <SlideImage sources={[link, link]} />
                  </SwiperSlide>
                )
            )}
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
        </SwiperSlider>
      </SwiperBox>
      <ContentBox>{children}</ContentBox>
    </CardModalBox>
  );
};
