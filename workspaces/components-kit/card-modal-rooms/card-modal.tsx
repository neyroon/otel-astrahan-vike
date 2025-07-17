import { ArrowLeftIcon, ArrowRightIcon, ButtonNavigation } from "@foundation";
import { useIsMobile } from "@hooks";
import { FunctionalComponent } from "preact";
import { useRef, useState } from "preact/hooks";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ButtonBoxLeft,
  ButtonBoxRight,
  CardModalBox,
  ContentBox,
  SlideImage,
  SlideVideo,
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
  videoPreviewLink?: string;
  videoLink?: string;
  className?: string;
}

export const CardModalRooms: FunctionalComponent<CardModal> = ({
  children,
  className,
  videoLink,
  videoPreviewLink,
  ...rest
}) => {
  const imageLinks = [
    videoPreviewLink,
    rest.imageLink1,
    rest.imageLink2,
    rest.imageLink3,
    rest.imageLink4,
    rest.imageLink5,
    rest.imageLink6,
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliderRef = useRef(null);
  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();
  const isMobile = useIsMobile();
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const slideChange = (e) => {
    if (videoRef?.current?.played) {
      videoRef?.current?.pause();
    }
  };
  return (
    <CardModalBox className={className}>
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
            onSlideChange={slideChange}
            loop
            ref={sliderRef}
          >
            {imageLinks.map((link, i) => {
              if (i === 0 && videoLink) {
                return (
                  link && (
                    <SwiperSlide>
                      <SlideVideo
                        ref={videoRef}
                        controls
                        controlsList="nodownload"
                        playsInline
                        width={1280}
                        height={720}
                      >
                        <source src={`${videoLink}#t=0.1`} type="video/mp4" />
                      </SlideVideo>
                    </SwiperSlide>
                  )
                );
              }
              return (
                link && (
                  <SwiperSlide>
                    <SlideImage sources={[link, link]} />
                  </SwiperSlide>
                )
              );
            })}
          </Swiper>
          <ButtonBoxLeft>
            <ButtonNavigation
              aria-label="Навигация влево"
              onClick={onButtonPrevClick}
            >
              <ArrowLeftIcon />
            </ButtonNavigation>
          </ButtonBoxLeft>
          <ButtonBoxRight>
            <ButtonNavigation
              aria-label="Навигация вправо"
              onClick={onButtonNextClick}
            >
              <ArrowRightIcon />
            </ButtonNavigation>
          </ButtonBoxRight>
        </SwiperSlider>
      </SwiperBox>
      <ContentBox>{children}</ContentBox>
    </CardModalBox>
  );
};
