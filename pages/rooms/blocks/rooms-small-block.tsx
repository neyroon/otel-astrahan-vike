import { CardLayout } from "@components/card-layout";
import { CardModalContentRooms } from "@components/card-modal-content-rooms";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardRoomsSmall1 from "../assets/card-rooms-small-1.webp";
import cardRoomsSmall2 from "../assets/card-rooms-small-2.webp";
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
          title="Номер Плавучего дома 1"
          square="Площадь: 10 м²"
          peoples="2 человека"
          bedrooms="2 односпальных кровати"
          lounge="Кондиционер"
          {...modalProps}
        >
          <CardModalContentRooms
            title="Номер Плавучего дома 1"
            description=""
            price="3000 ₽"
          />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={cardRoomsSmall2}
          imageLink2x={cardRoomsSmall2}
          title="Номер Плавучего дома 2"
          square="Площадь: 10 м²"
          peoples="2 человека"
          bedrooms="2 односпальных кровати"
          lounge="Кондиционер"
          {...modalProps}
        >
          <CardModalContentRooms
            title="Номер Плавучего дома 2"
            description=""
            price="3000 ₽"
          />
        </CardRoomBig>
      </CardLayout>
    </Section>
  );
};
