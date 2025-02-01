import { PosterCard } from "@components/poster-card";
import { PosterLayout } from "@components/poster-layout";
import { Section } from "@components/section";
import cardPoster1 from "../assets/card-poster-1.webp";
import cardPoster2 from "../assets/card-poster-2.webp";
import cardPoster3 from "../assets/card-poster-3.webp";
import cardPoster4 from "../assets/card-poster-4.webp";
import cardPoster5 from "../assets/card-poster-5.webp";

export const PosterBlock = () => {
  return (
    <Section
      title="Афиша событий"
      description="Мы дорожим каждым отзывом и всегда стараемся улучшать клиентский опыт. Каждый наш гость может напрямую связаться с собственником, чтобы рассказать о своем отдыхе"
      align="center"
      backgroundColor="dark-gray"
    >
      <PosterLayout>
        <PosterCard
          date="Дата 01 / 01 / 2024"
          title="Баня - скоро открытие"
          description="Приглашаем попробовать сезонные парения с нашим мастером-пара. Это не просто баня, а целое путешествие в мир традиций. "
          imageLink1x={cardPoster1}
          imageLink2x={cardPoster1}
        />
        <PosterCard
          date="Дата 01 / 01 / 2024"
          title="Бассейн - скоро открытие"
          description="Это идеальное место для всей семьи, где взрослые оценят возможность заплыва в бассейне глубиной 2 метра, в то время как маленькие гости будут в восторге от специально оборудованной детской безопасной зоны для игр. "
          imageLink1x={cardPoster5}
          imageLink2x={cardPoster5}
        />

        <PosterCard
          date="Дата 01 / 01 / 2024"
          title="Банные процедуры"
          description="Приглашаем попробовать сезонные парения с нашим мастером-пара. Это не просто баня, а целое путешествие в мир традиций. "
          imageLink1x={cardPoster3}
          imageLink2x={cardPoster3}
        />
        <PosterCard
          date="Дата 01 / 01 / 2024"
          title="Рыбалка на льду"
          description="Настоящие рыбаки знают, что рыбалка на льду бывает даже более увлекательна, чем летняя рыбалка. У нас есть все снаряжение, чтобы сделать ее максимально комфортной"
          imageLink1x={cardPoster4}
          imageLink2x={cardPoster4}
        />
        <PosterCard
          date="Дата 01 / 01 / 2024"
          title="Раннее бронирование"
          description="Мы всегда рады подстроиться под ваше расписание. Предупредите нас о ваших планах и мы сдеалем все, чтобы номер был готов, а завтрак уже стоял на столе. "
          imageLink1x={cardPoster2}
          imageLink2x={cardPoster2}
        />
      </PosterLayout>
    </Section>
  );
};
