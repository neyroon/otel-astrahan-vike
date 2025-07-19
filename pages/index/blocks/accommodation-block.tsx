import { BannerFull } from "@components/banner-full";
import { BannerSlideFull } from "@components/banner-slide-full";
import { Section } from "@components/section";
import houseImageHan1 from "../../rooms/assets/IMG_7043.webp";
import houseImageBii1 from "../../rooms/assets/IMG_7083.webp";
import houseImagePlavuch1 from "../../rooms/assets/photo_2025-07-17_14-25-49.webp";

export const AccommodationBlock = () => {
  return (
    <Section title="Проживание" withBorderBottom>
      <BannerFull>
        <BannerSlideFull
          title="Юрта-Бий "
          description="⁠*Бий* — это советник, судья или лидер на более локальном уровне. Бии часто были посредниками между народом и ханом, а также выполняли административные и юридические функции. Они считались мудрыми старейшинами, носителями традиций и справедливости."
          square="36 м²"
          quests="x2-3"
          imageLink1x={houseImageBii1}
          imageLink2x={houseImageBii1}
        />
        <BannerSlideFull
          title="Юрта-Хан"
          description="*Хан* — это верховный правитель, лидер государства или союза племён. Хан олицетворял власть, величие и силу. В истории тюркских и монгольских народов хан играл ключевую роль как правитель, наделённый авторитетом и правом принимать важнейшие решения."
          square="48 м²"
          quests="x4-5"
          imageLink1x={houseImageHan1}
          imageLink2x={houseImageHan1}
        />
        <BannerSlideFull
          title="Плавучий дом"
          description="6 номеров с односпальными кроватями, кондиционер в каждом номере. Общая столовая - как дома. Домашняя кухня: завтраки обеды и ужины готовит наша хозяйка. Зона отдыха на крыше с видом на Волгу. Уютная аутентичная атмосфера - как на старых добрых базах отдыха, только комфортнее. И да - рыбалка прямо с веранды! Можно ловить, не выходя с территории - удочка, утро и полная тишина."
          square="12 м²"
          quests="x2"
          imageLink1x={houseImagePlavuch1}
          imageLink2x={houseImagePlavuch1}
        />
      </BannerFull>
    </Section>
  );
};
