import { CardReview } from "@components/card-review";
import { CardReviewLayout } from "@components/card-review-layout/card-review-layout";
import { Section } from "@components/section";
import cardReview1 from "../assets/card-review-1.webp";
import cardReview2 from "../assets/card-review-2.webp";
import cardReview3 from "../assets/card-review-3.webp";
import cardReview4 from "../assets/card-review-4.webp";
import cardReview5 from "../assets/card-review-5.webp";
import cardReview6 from "../assets/card-review-6.webp";
import cardReview7 from "../assets/card-review-7.webp";
import cardReview8 from "../assets/card-review-8.webp";
import cardReview9 from "../assets/card-review-9.webp";

export const ReviewsBlock = () => {
  return (
    <Section
      title="Отзывы"
      description="За долгое время работы накопилось большое количество отзывов
о River & Fish. Мы гордимся высокими оценками наших клиентов, потому что искренне заботимся о каждом клиенте. "
      align="center"
      withBorderRadiusTop
    >
      <CardReviewLayout>
        <CardReview
          date="07 / 03 / 2025"
          houseName="Юрта-Хан"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview1}
          secondImageLink={cardReview2}
          thirdImageLink={cardReview3}
          review="Приехали на техническое открытие, многое было еще в процессе постройки, но команда отеля сделала буквально все, чтобы нам понравился отдыха. От уборки домика два раза за день, до романтического ужина при свечах в лодке) Ждем полноценное открытие"
        />
        <CardReview
          date="07 / 03 / 2025"
          houseName="Юрта-бий"
          fullName="Никифоров Евгений"
          grade={5}
          firstImageLink={cardReview4}
          secondImageLink={cardReview5}
          thirdImageLink={cardReview6}
          review="Все супер, порыбачили от души с братом и племянником. Теплая еда в дорогу, веселый егерь Михаил и тонна рыбы домой"
        />
        <CardReview
          date="07 / 03 / 2025"
          houseName="Юрта-Хан"
          fullName="Некрасова Анна"
          grade={5}
          firstImageLink={cardReview7}
          secondImageLink={cardReview8}
          thirdImageLink={cardReview9}
          review="Домики супер, ресторан очень вкусный, от Астрахани доехали за 40 минут с остановкой на пикник. Можно пришвартовать свою лодку. В следующий раз так и сделаем."
        />
      </CardReviewLayout>
    </Section>
  );
};
