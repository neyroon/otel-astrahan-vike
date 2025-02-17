import { CardLayout } from "@components/card-layout";
import { CardModalContentFish } from "@components/card-modal-content-fish";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import cardBoatImage1 from "../assets/breadcrumbs-image.webp";
import fishImage1 from "../assets/fish-image-1.webp";
import fishImage2 from "../assets/fish-image-2.webp";
import fishImage3 from "../assets/fish-image-3.webp";
import fishImage4 from "../assets/fish-image-4.webp";
import { CardModal } from "@components/card-modal";
import { styled } from "@linaria/react";

const StyledCardModal = styled(CardModal)`
  height: 100%;
  max-height: none;
  overflow: auto;
`;

export const BoatsSmallBlock = () => {
  const modalProps = {
    modalImageLink1: fishImage1,
    modalImageLink2: fishImage2,
    modalImageLink3: fishImage3,
    modalImageLink4: fishImage4,
  };
  return (
    <Section backgroundColor="dark-gray" doublePaddingTop>
      <StyledCardModal
        imageLink1={modalProps.modalImageLink1}
        imageLink2={modalProps.modalImageLink2}
        imageLink3={modalProps.modalImageLink3}
        imageLink4={modalProps.modalImageLink4}
      >
        <CardModalContentFish />
      </StyledCardModal>
    </Section>
  );
};
