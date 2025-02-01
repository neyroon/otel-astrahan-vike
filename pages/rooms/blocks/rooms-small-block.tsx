import { CardLayout } from "@components/card-layout";
import { CardModalContentRooms } from "@components/card-modal-content-rooms";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardRoomsSmall1 from "../assets/card-rooms-big-1.webp";
import houseImage1 from "../assets/house-1.webp";
import houseImage2 from "../assets/house-2.webp";
import houseImage3 from "../assets/house-3.webp";
import houseImage4 from "../assets/house-4.webp";
import houseImage5 from "../assets/house-5.webp";
import houseImage6 from "../assets/house-6.webp";

export const RoomsSmallBlock = () => {
  const modalProps = {
    modalImageLink1: houseImage1,
    modalImageLink2: houseImage2,
    modalImageLink3: houseImage3,
    modalImageLink4: houseImage4,
    modalImageLink5: houseImage5,
    modalImageLink6: houseImage6,
  };
  return (
    <Section title="Номера плавучего дома" backgroundColor="dark-gray">
      <CardLayout variant="s">
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
          square="Площадь: 36 m2"
          peoples="2-5 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 2"
          square="Площадь: 46 m2"
          peoples="2-5 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 3"
          square="Площадь: 46 m2"
          peoples="2-5 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 4"
          square="Площадь: 36 m2"
          peoples="2-5 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 5"
          square="Площадь: 46 m2"
          peoples="2-5 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 6"
          square="Площадь: 46 m2"
          peoples="2-5 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
          {...modalProps}
        >
          <CardModalContentRooms />
        </CardRoomBig>
      </CardLayout>
    </Section>
  );
};
