import { BannerHalf } from "@components/banner-half";
import { BannerOnlyScrollbar } from "@components/banner-only-scrollbar";
import { BannerSlideHalf } from "@components/banner-slide-half";
import { BannerOnlyScrollbarSlide } from "@components/banner-slide-only-scrollbar";
import { InformationBanners } from "@components/Information-banners";
import { InformationDescription } from "@components/information-description";
import { Section } from "@components/section";
import BannerHalfImage from "../assets/banner-half-1.webp";
import BannerOnlySidebarImage1 from "../assets/banner-only-scrollbar-image-1.webp";

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
          // description1="Погрузитесь в мир охоты в живописной Астрахани, остановившись в нашем эко-отеле. Под руководством потомственного егеря Михаила вы сможете поохотиться на фазанов, уток, гусей, косуль и кабанов. Михаил обладает знаниями троп, специфики поведения местных зверей, а также исключительной огневой подготовкой. Безопасность и приятные впечатления гарантированы!"
          description1="Погрузитесь в мир охоты в живописной Астрахани, остановившись в нашем эко-отеле. Вы сможете поохотиться под руководством потомственного егеря Михаила. Михаил обладает знаниями троп, а также исключительной огневой подготовкой. Безопасность и приятные впечатления гарантированы!"
          description2="Для вашего комфорта и удобства мы предлагаем аренду ружей и арбалетов, а также организуем стрельбу по тарелочкам для поддержания формы спортсменов и любителей охоты. Независимо от вашего уровня подготовки, наш персонал обеспечит безопасность и яркую вылазку, чтобы ваши впечатления от охоты были исключительно положительными"
        />
        <BannerOnlyScrollbar>
          <BannerOnlyScrollbarSlide
            imageLink1x={BannerOnlySidebarImage1}
            imageLink2x={BannerOnlySidebarImage1}
          />
        </BannerOnlyScrollbar>
      </InformationBanners>
    </Section>
  );
};
