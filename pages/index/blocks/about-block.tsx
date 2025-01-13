import { CardAbout } from "@components/card-about";
import { CardAboutLayout } from "@components/card-about-layout";
import { Section } from "@components/section";
import cardAbout1 from "../assets/card-about-1.png";
import cardAbout2 from "../assets/card-about-2.png";
import cardAbout3 from "../assets/card-about-3.jpeg";

export const AboutBlock = () => {
  return (
    <Section
      align="center"
      title="О нас в цифрах"
      description="Мы преследуем ключевую идею эко-отеля — «природа» и «умиротворение», окутывая их красивым интерьером и дружелюбным сервисом"
      withBorderBottom
    >
      <CardAboutLayout>
        <CardAbout
          number="8"
          text="Видов развлечений и досуга"
          imageLink1x={cardAbout1}
          imageLink2x={cardAbout1}
        />
        <CardAbout
          number="12"
          text="Дизайнерских домов скандинавского типа"
          imageLink1x={cardAbout2}
          imageLink2x={cardAbout2}
        />
        <CardAbout
          number="9"
          text="Лодок с спортивными моторами"
          imageLink1x={cardAbout3}
          imageLink2x={cardAbout3}
        />
      </CardAboutLayout>
    </Section>
  );
};
