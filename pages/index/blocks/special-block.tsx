import { BannerSlideSpecial } from "@components/banner-slide-special";
import { BannerSpecial } from "@components/banner-special";
import { Section } from "@components/section";
import houseSpecial2 from "../../rooms/assets/IMG_7043.webp";

export const SpecialBlock = () => {
  return (
    <Section title="Спецпредложения" backgroundColor="dark-gray">
      <BannerSpecial>
        <BannerSlideSpecial
          imageLink1x={houseSpecial2}
          imageLink2x={houseSpecial2}
        />
      </BannerSpecial>
    </Section>
  );
};
