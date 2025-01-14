import { CardLayout } from "@components/card-layout";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardRoomsSmall1 from "../assets/card-rooms-big-1.webp";

export const RoomsSmallBlock = () => {
  return (
    <Section title="Номера плавучего дома" backgroundColor="dark-gray">
      <CardLayout variant="s">
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
          square="Площадь: 36 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
          square="Площадь: 46 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
          square="Площадь: 46 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
          square="Площадь: 36 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
          square="Площадь: 46 m2"
          peoples="2-4 человек"
          bedrooms="1 спальни"
          lounge="1 гостиная"
          doubleBed="1 двуспальная кровать"
          sofaBed="1 диван-кровать"
        />
        <CardRoomBig
          imageLink1x={cardRoomsSmall1}
          imageLink2x={cardRoomsSmall1}
          title="Номер 1"
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
