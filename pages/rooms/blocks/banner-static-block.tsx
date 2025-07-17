import {
  Description,
  LineThough,
} from "@components/banner-slide-special/banner-slide-special.style";
import { BannerStatic } from "@components/banner-static";
import { Section } from "@components/section";
import bannerStaticImage from "../../fishing/assets/water.webp";

export const BannerStaticBlock = () => {
  return (
    <Section backgroundColor="dark-gray">
      <BannerStatic
        imageLink1x={bannerStaticImage}
        imageLink2x={bannerStaticImage}
        title="Выгода 50% для первых гостей "
        description={
          <>
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
          </>
        }
      />
    </Section>
  );
};
