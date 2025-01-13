import { CardReview } from "@components/card-review";
import { CardReviewLayout } from "@components/card-review-layout/card-review-layout";
import { Section } from "@components/section";
import cardReview1 from "../assets/card-review-1.png";
import cardReview2 from "../assets/card-review-2.png";
import cardReview3 from "../assets/card-review-3.png";
import cardReview4 from "../assets/card-review-4.png";
import cardReview5 from "../assets/card-review-5.png";
import cardReview6 from "../assets/card-review-6.png";
import cardReview7 from "../assets/card-review-7.png";
import cardReview8 from "../assets/card-review-8.png";
import cardReview9 from "../assets/card-review-9.png";

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
