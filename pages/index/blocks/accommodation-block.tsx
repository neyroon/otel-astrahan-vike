import { BannerFull } from "@components/banner-full";
import { BannerSlideFull } from "@components/banner-slide-full";
import { Section } from "@components/section";
import houseFull from "../assets/house-full.webp";

export const AccommodationBlock = () => {
  return (
    <Section title="Проживание" withBorderBottom>
      <BannerFull>
        <BannerSlideFull
          title="Юрта-Люкс"
          description="Дом площадью 36 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку."
          square="36 м²"
          quests="x4"
          imageLink1x={houseFull}
          imageLink2x={houseFull}
        />
        <BannerSlideFull
          title="Юрта-Макси"
          description="Дом площадью 43 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку."
          square="43 м²"
          quests="x4"
          imageLink1x={houseFull}
          imageLink2x={houseFull}
        />
      </BannerFull>
    </Section>
  );
};
