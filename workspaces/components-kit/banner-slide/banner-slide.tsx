import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  BannerSlideBox,
  BottomText,
  Description,
  GradientBox,
  StyledVideo,
  TopText,
} from "./banner-slide.style";
import { BannerSlideProps } from "./types";

export const BannerSlide: FunctionComponent<BannerSlideProps> = ({
  videoSrcMP4,
  poster,
}) => {
  return (
    <BannerSlideBox>
      <StyledVideo
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        width={1280}
        height={720}
      >
        <source src={videoSrcMP4} type="video/mp4" />
      </StyledVideo>
      <GradientBox />
      <TopText size="20" color="white">
        Бары, рестораны, бани
      </TopText>
      <BottomText>
        <Typography size="48" color="white">
          Уединение с природой в домиках на берегу Волги
        </Typography>
        <Description size="18" color="white">
          Команда River-Fish – это люди, которые проехали в путешествиях по
          России несколько десятков тысяч километров, побывали во всех
          знаменитых заповедниках и заказниках в поиске открытий, совместных
          впечатлений от путешествия
        </Description>
      </BottomText>
    </BannerSlideBox>
  );
};
