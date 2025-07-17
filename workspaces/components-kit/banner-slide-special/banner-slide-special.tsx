import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  BannerSlideBox,
  BottomText,
  Description,
  GradientBox,
  LineThough,
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
          Выгода 50% для первых гостей
        </Typography>
        <Description size="20" color="white">
          Юрта-Хан:
          <LineThough size="16" color="white">
            25&nbsp;000
          </LineThough>
          12&nbsp;500
          <br />
          Юрта-Бий:
          <LineThough size="16" color="white">
            20&nbsp;000
          </LineThough>
          10&nbsp;000
        </Description>
        <StyledButton size="m">Забронировать номер</StyledButton>
      </BottomText>
    </BannerSlideBox>
  );
};
