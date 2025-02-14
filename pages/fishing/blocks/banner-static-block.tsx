import { BannerStaticSmall } from "@components/banner-static-small";
import { Section } from "@components/section";
import bannerStaticImage from "../assets/water.webp";

export const BannerStaticBlock = () => {
  return (
    <Section backgroundColor="dark-gray">
      <BannerStaticSmall
        imageLink1x={bannerStaticImage}
        imageLink2x={bannerStaticImage}
        title="Наши комфортабельные номера"
        description="Вы можете разместиться в любом (либо в любых, если отдыхаете компанией) из 8 номеров"
      />
    </Section>
  );
};
