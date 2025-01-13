import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  BannerSlideBox,
  BottomText,
  Description,
  StyledButton,
  StyledImage,
} from "./banner-slide-special.style";
import { BannerSlideProps } from "./types";

export const BannerSlideSpecial: FunctionComponent<BannerSlideProps> = ({
  imageLink1x,
  imageLink2x,
}) => {
  return (
    <BannerSlideBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
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
        <StyledButton size="m">Забронировать номер</StyledButton>
      </BottomText>
    </BannerSlideBox>
  );
};
