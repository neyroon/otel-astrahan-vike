import { CardLayout } from "@components/card-layout";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardRoomsBig1 from "../assets/card-rooms-big-1.png";
import cardRoomsBig2 from "../assets/card-rooms-big-2.png";

export const RoomsBigBlock = () => {
  return (
    <Section backgroundColor="dark-gray" doublePaddingTop>
      <CardLayout variant="m">
        <CardRoomBig
          imageLink1x={cardRoomsBig1}
          imageLink2x={cardRoomsBig1}
          title="Юрта-Люкс"
          description="Дом площадью 43 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку. В доме удобная гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей."
          square="Площадь: 36 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
        <CardRoomBig
          imageLink1x={cardRoomsBig2}
          imageLink2x={cardRoomsBig2}
          title="Юрта-Люкс"
          description="Дом площадью 43 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку. В доме удобная гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей."
          square="Площадь: 46 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
      </CardLayout>
    </Section>
  );
};
