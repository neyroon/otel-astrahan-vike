import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  BannerSlideBox,
  BottomText,
  Description,
  GradientBox,
  StyledImage,
  TopText,
} from "./banner-slide.style";
import { BannerSlideProps } from "./types";

export const BannerSlide: FunctionComponent<BannerSlideProps> = ({
  imageLink1x,
  imageLink2x,
}) => {
  return (
    <BannerSlideBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} loading="eager" />
      <GradientBox />
      <TopText size="20" color="white">
        Бары, рестораны, бани
      </TopText>
      <BottomText>
        <Typography size="48" color="white">
          Уединение с природой в домиках скандинавского типа
        </Typography>
        <Description size="18" color="white">
          Команда River-Fish – это люди, которые проехали в путешествиях по
          России несколько десятков тысяч километров, побывали во всех
          знаменитых заповедниках, водоемах и заказниках в поиске открытий,
          совместных впечатлений от путешествия
        </Description>
      </BottomText>
    </BannerSlideBox>
  );
};
