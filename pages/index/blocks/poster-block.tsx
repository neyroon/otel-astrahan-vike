import { PosterCard } from "@components/poster-card";
import { PosterLayout } from "@components/poster-layout";
import { Section } from "@components/section";
import cardPoster1 from "../assets/card-poster-1.png";
import cardPoster2 from "../assets/card-poster-2.png";
import cardPoster3 from "../assets/card-poster-3.png";
import cardPoster4 from "../assets/card-poster-4.png";
import cardPoster5 from "../assets/card-poster-5.png";

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
          title="SPA"
          description="Приглашаем попробовать сезонные парения с нашим мастером-пара. Это не просто баня, а целое путешествие в мир традиций. "
          imageLink1x={cardPoster1}
          imageLink2x={cardPoster1}
        />
        <PosterCard
          date="Дата 01 / 01 / 2024"
          title="Раннее бронирование"
          description="Мы всегда рады подстроиться под ваше расписание. Предупредите нас о ваших планах и мы сдеалем все, чтобы номер был готов, а завтрак уже стоял на столе. "
          imageLink1x={cardPoster2}
          imageLink2x={cardPoster2}
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
          title="Бассейн"
          description="Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."
          imageLink1x={cardPoster5}
          imageLink2x={cardPoster5}
        />
      </PosterLayout>
    </Section>
  );
};
