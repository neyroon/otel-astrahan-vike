import { BannerSlideSpecial } from "@components/banner-slide-special";
import { BannerSpecial } from "@components/banner-special";
import { Section } from "@components/section";
import houseSpecial2 from "../../rooms/assets/card-rooms-big-1.webp";
import houseSpecial1 from "../assets/house-special.webp";

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
