import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  BannerSlideBox,
  BottomText,
  Description,
  GradientBox,
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
      <GradientBox />
      <BottomText>
        <Typography size="48" color="white">
          Специальный тариф Ранние пташки - скидка 50% для первых гостей нашего
          отеля во время технического открытия
        </Typography>
        <Description size="18" color="white">
          Проведите больше времени с близкими на природе вдали от суеты.
        </Description>
        <StyledButton size="m">Забронировать номер</StyledButton>
      </BottomText>
    </BannerSlideBox>
  );
};
