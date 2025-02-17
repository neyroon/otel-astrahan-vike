import { BannerHalf } from "@components/banner-half";
import { BannerOnlyScrollbar } from "@components/banner-only-scrollbar";
import { BannerSlideHalf } from "@components/banner-slide-half";
import { BannerOnlyScrollbarSlide } from "@components/banner-slide-only-scrollbar";
import { InformationBanners } from "@components/Information-banners";
import { InformationDescription } from "@components/information-description";
import { Section } from "@components/section";
import BannerHalfImage1 from "../assets/banner-half-1.webp";
import BannerOnlySidebarImage1 from "../assets/banner-only-scrollbar-image-1.webp";
import BannerOnlySidebarImage2 from "../assets/banner-only-scrollbar-image-2.webp";
import BannerOnlySidebarImage3 from "../assets/banner-only-scrollbar-image-3.webp";
import BannerHalfImage2 from "../assets/banner-only-scrollbar-image-5.webp";

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
          description1="Каждый рыбак знает, что успех улова зависит от знания мест, особенностей водоема, сезонности и ритуалов. Наш эко-отель предоставляет уникальные возможности для рыбалки в Астрахани, предлагая различные способы ловли. У нас есть удобные, современные лодки, которые приготовлены для вашего максимального комфорта. Вас будут сопровождать опытные егеря, которые знают все самые рыбные места региона."
          description2="Наши егеря не только хорошо ориентируются на воде, но и помогут с обработкой вашего улова. Вы сможете попробовать настоящий астраханский деликатес — икру пятиминутку, приготовленную из вашей же рыбы. Эта уникальная возможность позволит вам полностью погрузиться в атмосферу аутентичной местной культуры и насладиться вкусами региона. Рыбалка в Астрахани — это не просто ловля мощной и хитрой рыбы, это путешествие к истокам традиций и гастрономических особенностей региона!"
          description3="Наша база предлагает совершенно новый вид отдыха в Астрахани. В Дельте больше нет таких уникальных мест, где вам предложат богатый выбор услуг и такое душевное отношение к гостям. Русская баня с купелью настоящее удовольствие для тех, кто провел весь день на раскатах. Наш склад предлагает любое снаряжение для рыбной ловли и охоты, поэтому вы можете путешествовать 'на легке'!"
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
