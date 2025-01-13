import { BannerFull } from "@components/banner-full";
import { BannerSlideFull } from "@components/banner-slide-full";
import { Section } from "@components/section";
import houseFull from "../assets/house-full.png";

export const AccommodationBlock = () => {
  return (
    <Section title="Проживание" withBorderBottom>
      <BannerFull>
        <BannerSlideFull imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideFull imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideFull imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideFull imageLink1x={houseFull} imageLink2x={houseFull} />
        <BannerSlideFull imageLink1x={houseFull} imageLink2x={houseFull} />
      </BannerFull>
    </Section>
  );
};
