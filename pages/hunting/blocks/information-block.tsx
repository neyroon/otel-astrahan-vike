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
          description1="Погрузитесь в мир охоты в живописной Астрахани, остановившись в нашем эко-отеле. Под руководством потомственного егеря Михаила вы сможете поохотиться на фазанов, уток, гусей, косуль и кабанов. Михаил обладает знаниями троп, специфики поведения местных зверей, а также исключительной огневой подготовкой. Безопасность и приятные впечатления гарантированы!"
          description2="Для вашего комфорта и удобства мы предлагаем аренду ружья, а также организуем стрельбу по тарелочкам для поддержания формы спортсменов и любителей охоты. Независимо от вашего уровня подготовки, наш персонал обеспечит безопасность и яркую вылазку, чтобы ваши впечатления от охоты были исключительно положительными"
          description3={
            <>
              Можно охотиться на следующих животных: <br></br>- Кабан (все
              половозрастные группы) — с 1 октября по 28 (29) февраля<br></br>-
              Косуля сибирская (все половозрастные группы) — с 1 октября по 10
              января.<br></br> - Водоплавающая дичь (гуси, утки, лысуха,
              камышница) — с 1 октября по 10 января.<br></br>- Благородный олень
              (все половозрастные группы) — с 1 октября по 10 января.<br></br>-
              Заяц-русак — с 1 ноября по 31 января.<br></br>- Лисица, корсак,
              енотовидная собака — с 1 ноября по 28 (29) февраля.
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
