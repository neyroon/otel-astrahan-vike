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
          Скидка 15% при проживании от 2х ночей
        </Typography>
        <Description size="18" color="white">
          Проведите больше времени на природе и с близкими вдали от суеты
          города.
        </Description>
        <StyledButton size="m">Забронировать номер</StyledButton>
      </BottomText>
    </BannerSlideBox>
  );
};
