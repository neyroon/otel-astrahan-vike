import { FunctionComponent } from "preact";
import { BannerSlideBox, StyledImage } from "./banner-slide.style";
import { BannerSlideProps } from "./types";

export const BannerSlideHalf: FunctionComponent<BannerSlideProps> = ({
  imageLink1x,
  imageLink2x,
}) => {
  return (
    <BannerSlideBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
    </BannerSlideBox>
  );
};
