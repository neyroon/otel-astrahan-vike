import { BannerStatic } from "@components/banner-static";
import { Section } from "@components/section";
import bannerStaticImage from "../assets/banner-static.png";

export const BannerStaticBlock = () => {
  return (
    <Section backgroundColor="dark-gray">
      <BannerStatic
        imageLink1x={bannerStaticImage}
        imageLink2x={bannerStaticImage}
        title="Скидка 15% при проживании в плавучем доме"
        description="Проведите больше времени на природе и с близкими вдали от суеты города."
      />
    </Section>
  );
};
