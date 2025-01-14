import { BannerSlideSpecial } from "@components/banner-slide-special";
import { BannerSpecial } from "@components/banner-special";
import { Section } from "@components/section";
import houseFull from "../assets/house-full.webp";

export const SpecialBlock = () => {
  return (
    <Section title="Спецпредложения" backgroundColor="dark-gray">
      <BannerSpecial>
        <BannerSlideSpecial imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideSpecial imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideSpecial imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideSpecial imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideSpecial imageLink1x={houseFull} imageLink2x={houseFull} />
      </BannerSpecial>
    </Section>
  );
};
