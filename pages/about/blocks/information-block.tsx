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
          description1="Команда River-Fish – это люди, которые проехали в путешествиях по России несколько десятков тысяч километров, побывали во всех знаменитых заповедниках, водоемах и заказниках в поиске открытий, совместных впечатлений от путешествия, новых вкусов и эмоций."
          description2="Весь наш опыт мы решили воплотить в авторском эко-отеле в одном из самых красивых мест нашей Родины – название места. River-Fish это пространство, где мы сделаем ваш отдых идеальным. Мы позаботились о всех мелочах, чтобы ничто не отвлекало вас от главного – красоты момента и удовольствия."
          description3="Мы создали проект на природе с большим количеством зон для отдыха, общения или уединения. Мы преследуем ключевую идею эко-отеля — «природа» и «умиротворение», окутывая их красивым интерьером и дружелюбным сервисом."
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
