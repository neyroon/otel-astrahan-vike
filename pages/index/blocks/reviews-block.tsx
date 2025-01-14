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
о River & Fish. Мы гордимся высокими оценками наших клиентов, потому что искренне заботимся о каждом клиенте."
      align="center"
    >
      <CardReviewLayout>
        <CardReview
          date="07 / 03 / 2024"
          houseName="Название домика"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview1}
          secondImageLink={cardReview2}
          thirdImageLink={cardReview3}
          review="Провели в данном месте производственный корпоратив. Все понравилось. За свою цену, отличный отель, дружелюбный персонал."
        />
        <CardReview
          date="07 / 03 / 2024"
          houseName="Название домика"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview4}
          secondImageLink={cardReview5}
          thirdImageLink={cardReview6}
          review="Провели в данном месте производственный корпоратив. Все понравилось."
        />
        <CardReview
          date="07 / 03 / 2024"
          houseName="Название домика"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview7}
          secondImageLink={cardReview8}
          thirdImageLink={cardReview9}
          review="Все понравилось, главное детям было весело, для них очень много развлечений. Номер брали 2-х комнатный люкс, достаточно просторный плюс принесли раскладушку. Еда хорошая, есть из чего выбрать, алкоголь в достатке."
        />
        <CardReview
          date="07 / 03 / 2024"
          houseName="Название домика"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview1}
          secondImageLink={cardReview2}
          thirdImageLink={cardReview3}
          review="Провели в данном месте производственный корпоратив. Все понравилось. За свою цену, отличный отель, дружелюбный персонал."
        />
        <CardReview
          date="07 / 03 / 2024"
          houseName="Название домика"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview4}
          secondImageLink={cardReview5}
          thirdImageLink={cardReview6}
          review="Провели в данном месте производственный корпоратив. Все понравилось."
        />
        <CardReview
          date="07 / 03 / 2024"
          houseName="Название домика"
          fullName="Иванова Валерия"
          grade={5}
          firstImageLink={cardReview7}
          secondImageLink={cardReview8}
          thirdImageLink={cardReview9}
          review="Все понравилось, главное детям было весело, для них очень много развлечений. Номер брали 2-х комнатный люкс, достаточно просторный плюс принесли раскладушку. Еда хорошая, есть из чего выбрать, алкоголь в достатке."
        />
      </CardReviewLayout>
    </Section>
  );
};
