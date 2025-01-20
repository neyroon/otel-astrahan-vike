import { BannerSlideSpecial } from "@components/banner-slide-special";
import { BannerSpecial } from "@components/banner-special";
import { Section } from "@components/section";
import houseSpecialFull from "../assets/house-special.webp";

export const SpecialBlock = () => {
  return (
    <Section title="Спецпредложения" backgroundColor="dark-gray">
      <BannerSpecial>
        <BannerSlideSpecial
          imageLink1x={houseSpecialFull}
          imageLink2x={houseSpecialFull}
        />
        <BannerSlideSpecial
          imageLink1x={houseSpecialFull}
          imageLink2x={houseSpecialFull}
        />
        <BannerSlideSpecial
          imageLink1x={houseSpecialFull}
          imageLink2x={houseSpecialFull}
        />
        <BannerSlideSpecial
          imageLink1x={houseSpecialFull}
          imageLink2x={houseSpecialFull}
        />
        <BannerSlideSpecial
          imageLink1x={houseSpecialFull}
          imageLink2x={houseSpecialFull}
        />
      </BannerSpecial>
    </Section>
  );
};
