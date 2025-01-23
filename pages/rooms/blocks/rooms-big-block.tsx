import { CardLayout } from "@components/card-layout";
import { CardModalContentRooms } from "@components/card-modal-content-rooms";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardRoomsBig1 from "../assets/card-rooms-big-1.webp";
import cardRoomsBig2 from "../assets/card-rooms-big-2.webp";
import houseImage1 from "../assets/house-1.webp";
import houseImage2 from "../assets/house-2.webp";
import houseImage3 from "../assets/house-3.webp";
import houseImage4 from "../assets/house-4.webp";
import houseImage5 from "../assets/house-5.webp";
import houseImage6 from "../assets/house-6.webp";

export const RoomsBigBlock = () => {
  const modalProps = {
    modalImageLink1: houseImage1,
    modalImageLink2: houseImage2,
    modalImageLink3: houseImage3,
    modalImageLink4: houseImage4,
    modalImageLink5: houseImage5,
    modalImageLink6: houseImage6,
  };
  return (
    <Section backgroundColor="dark-gray" doublePaddingTop>
      <CardLayout variant="m">
        <CardRoomBig
          imageLink1x={cardRoomsBig1}
          imageLink2x={cardRoomsBig1}
          title="Юрта-Люкс"
          description="Дом площадью 36 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку. В доме удобная гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей."
          square="Площадь: 36 м²"
          peoples="2-4 человека"
          bedrooms="1 спальня"
          lounge="1 гостиная"
          sofaBed="1 диван-кровать"
          doubleBed="1 двуспальная кровать"
          {...modalProps}
        >
          <CardModalContentRooms
            title="Юрта-Люкс"
            description="Дом площадью 36 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку. В доме удобная гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей."
            price="10 000"
          />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsBig2}
          imageLink2x={cardRoomsBig2}
          title="Юрта-Макси"
          description="Дом площадью 43 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку. В доме удобная гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей."
          square="Площадь: 43 м²"
          peoples="2-4 человек"
          bedrooms="1 спальня"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms
            title="Юрта-Макси"
            description="Дом площадью 43 м² расположен на первой линии. Панорамное остекление и веранда, откуда открывается отличный вид на реку. В доме удобная гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей."
            price="15 000"
          />
        </CardRoomBig>
      </CardLayout>
    </Section>
  );
};
