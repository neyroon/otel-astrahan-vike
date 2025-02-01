import { CardLayout } from "@components/card-layout";
import { CardModalContentFish } from "@components/card-modal-content-fish";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardBoatImage1 from "../assets/breadcrumbs-image.webp";
import fishImage1 from "../assets/fish-image-1.webp";
import fishImage2 from "../assets/fish-image-2.webp";
import fishImage3 from "../assets/fish-image-3.webp";
import fishImage4 from "../assets/fish-image-4.webp";

export const BoatsSmallBlock = () => {
  const modalProps = {
    modalImageLink1: fishImage1,
    modalImageLink2: fishImage2,
    modalImageLink3: fishImage3,
    modalImageLink4: fishImage4,
  };
  return (
    <Section backgroundColor="dark-gray" doublePaddingTop>
      <CardLayout variant="m">
        <CardRoomBig
          imageLink1x={cardBoatImage1}
          imageLink2x={cardBoatImage1}
          title="Волжанка 46 Fish"
          square="Длина: 4,96 м"
          peoples="Ширина: 1,94 м"
          bedrooms="Вес: 350 кг"
          lounge="Грузоподъемность: 485кг"
          button1text="Связаться с администратором"
          button1Href="tel:+79208953030"
          {...modalProps}
        >
          <CardModalContentFish />
        </CardRoomBig>
      </CardLayout>
    </Section>
  );
};
