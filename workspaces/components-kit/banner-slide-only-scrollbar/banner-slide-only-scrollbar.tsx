import { FunctionComponent } from "preact";
import {
  BannerSlideBox,
  StyledImage,
} from "./banner-slide-only-scrollbar.style";

export interface BannerSlideFullProps {
  imageLink1x: string;
  imageLink2x: string;
}

export const BannerOnlyScrollbarSlide: FunctionComponent<
  BannerSlideFullProps
> = ({ imageLink1x, imageLink2x }) => {
  return (
    <BannerSlideBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
    </BannerSlideBox>
  );
};
