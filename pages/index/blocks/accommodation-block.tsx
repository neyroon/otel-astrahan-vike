import { BannerFull } from "@components/banner-full";
import { BannerSlideFull } from "@components/banner-slide-full";
import { Section } from "@components/section";
import houseFull1 from "../assets/house-full-1.webp";
import houseFull2 from "../assets/house-full-2.webp";

export const AccommodationBlock = () => {
  return (
    <Section title="Проживание" withBorderBottom>
      <BannerFull>
        <BannerSlideFull
          title="Юрта-Бий"
          description="⁠*Бий* — это советник, судья или лидер на более локальном уровне. Бии часто были посредниками между народом и ханом, а также выполняли административные и юридические функции. Они считались мудрыми старейшинами, носителями традиций и справедливости. "
          square="36 м²"
          quests="x4"
          imageLink1x={houseFull1}
          imageLink2x={houseFull1}
        />
        <BannerSlideFull
          title="Юрта-Хан"
          description="*Хан* — это верховный правитель, лидер государства или союза племён. Хан олицетворял власть, величие и силу. В истории тюркских и монгольских народов хан играл ключевую роль как правитель, наделённый авторитетом и правом принимать важнейшие решения."
          square="48 м²"
          quests="x4"
          imageLink1x={houseFull2}
          imageLink2x={houseFull2}
        />
      </BannerFull>
    </Section>
  );
};
