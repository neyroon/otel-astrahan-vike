import { BannerHalf } from "@components/banner-half";
import { BannerOnlyScrollbar } from "@components/banner-only-scrollbar";
import { BannerSlideHalf } from "@components/banner-slide-half";
import { BannerOnlyScrollbarSlide } from "@components/banner-slide-only-scrollbar";
import { InformationBanners } from "@components/Information-banners";
import { InformationDescription } from "@components/information-description";
import { Section } from "@components/section";
import BannerHalfImage1 from "../assets/banner-half-1.webp";
import BannerHalfImage2 from "../assets/banner-half-2.webp";
import BannerOnlySidebarImage1 from "../assets/banner-only-scrollbar-image-1.webp";
import BannerOnlySidebarImage2 from "../assets/banner-only-scrollbar-image-2.webp";
import BannerOnlySidebarImage3 from "../assets/banner-only-scrollbar-image-3.webp";

export const InformationBlock = () => {
  return (
    <Section backgroundColor="dark-gray" align="center" doublePaddingTop>
      <InformationBanners>
        <BannerHalf>
          <BannerSlideHalf
            imageLink1x={BannerHalfImage1}
            imageLink2x={BannerHalfImage1}
          />
          <BannerSlideHalf
            imageLink1x={BannerHalfImage2}
            imageLink2x={BannerHalfImage2}
          />
        </BannerHalf>
        <InformationDescription
          description1="Погрузитесь в мир охоты в живописной Астрахани, остановившись в нашем эко-отеле. Под руководством потомственного егеря Михаила вы сможете поохотиться на Вы сможете поохотиться на лисиц, волков, шакалов, енотовидных собак, зайцев-русаков, водоплавающую дичь (утка, гусь, лебедь), фазанов, куропаток. Михаил обладает знаниями троп, специфики поведения местных зверей, а также исключительной огневой подготовкой. Безопасность и приятные впечатления гарантированы!"
          description2="Для вашего комфорта и удобства мы предлагаем аренду ружья, а также организуем стрельбу по тарелочкам для поддержания формы спортсменов и любителей охоты. Независимо от вашего уровня подготовки, наш персонал обеспечит безопасность и яркую вылазку, чтобы ваши впечатления от охоты были исключительно положительными"
          description3={
            <>
              <br></br>- Лисица
              <br></br>- Волк
              <br></br>- Шакал
              <br></br>- Енотовидная собака
              <br></br>- Заяц-русак
              <br></br>- Водоплавающая дичь (утка, гусь, лебедь)
              <br></br>- Фазан
              <br></br>- Куропатка
            </>
          }
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
        </BannerOnlyScrollbar>
      </InformationBanners>
    </Section>
  );
};
