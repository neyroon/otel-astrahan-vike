import { FunctionComponent } from "preact";
import { BannerSlideBox, StyledImage, StyledVideo } from "./banner-slide.style";
import { BannerSlideProps } from "./types";

export const BannerSlideHalf: FunctionComponent<BannerSlideProps> = ({
  imageLink1x,
  imageLink2x,
  videoLink,
  videoLinkPoster,
}) => {
  if (videoLink) {
    return (
      <BannerSlideBox>
        <StyledVideo controls poster={videoLinkPoster}>
          <source src={videoLink} type="video/mp4" />
        </StyledVideo>
      </BannerSlideBox>
    );
  }
  return (
    <BannerSlideBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
    </BannerSlideBox>
  );
};
