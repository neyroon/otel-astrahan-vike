import { BannerHalf } from "@components/banner-half";
import { BannerOnlyScrollbar } from "@components/banner-only-scrollbar";
import { BannerSlideHalf } from "@components/banner-slide-half";
import { BannerOnlyScrollbarSlide } from "@components/banner-slide-only-scrollbar";
import { InformationBanners } from "@components/Information-banners";
import { InformationDescription } from "@components/information-description";
import { Section } from "@components/section";
import BannerHalfImage from "../assets/banner-half-1.webp";
import BannerOnlySidebarImage1 from "../assets/banner-only-scrollbar-image-1.webp";
import BannerOnlySidebarImage2 from "../assets/banner-only-scrollbar-image-2.webp";
import BannerOnlySidebarImage3 from "../assets/banner-only-scrollbar-image-3.webp";

export const InformationBlock = () => {
  return (
    <Section backgroundColor="dark-gray" align="center" doublePaddingTop>
      <InformationBanners>
        <BannerHalf>
          <BannerSlideHalf
            imageLink1x={BannerHalfImage}
            imageLink2x={BannerHalfImage}
          />
          <BannerSlideHalf
            imageLink1x={BannerHalfImage}
            imageLink2x={BannerHalfImage}
          />
        </BannerHalf>
        <InformationDescription
          description1="Наш эко-отель предлагает особенные условия запоминающегося романтического отдыха для пар. От уединенных прогулок по живописным окрестностям с салютом до ужинов при свечах на открытом воздухе — мы создадим для вас идеальную атмосферу"
          description2="Сотрудники отеля помогут организовать все детали вашего романтического путешествия. Вас ждут специально подготовленные номера с цветами и шампанским, расслабляющие спа-процедуры для двоих и уютные вечера у камина"
          description3="Каждое ваше желание будет учтено, чтобы вы вам захотелось вернуться. Приезжайте и погрузитесь в атмосферу романтики и спокойствия, которую мы с любовью создадим специально для вас!"
        />
        <BannerOnlyScrollbar>
          <BannerOnlyScrollbarSlide
            imageLink1x={BannerOnlySidebarImage1}
            imageLink2x={BannerOnlySidebarImage1}
          />
          <BannerOnlyScrollbarSlide
            imageLink1x={BannerOnlySidebarImage2}
            imageLink2x={BannerOnlySidebarImage2}
          />
          <BannerOnlyScrollbarSlide
            imageLink1x={BannerOnlySidebarImage3}
            imageLink2x={BannerOnlySidebarImage3}
          />
          <BannerOnlyScrollbarSlide
            imageLink1x={BannerOnlySidebarImage3}
            imageLink2x={BannerOnlySidebarImage3}
          />
          <BannerOnlyScrollbarSlide
            imageLink1x={BannerOnlySidebarImage3}
            imageLink2x={BannerOnlySidebarImage3}
          />
        </BannerOnlyScrollbar>
      </InformationBanners>
    </Section>
  );
};
