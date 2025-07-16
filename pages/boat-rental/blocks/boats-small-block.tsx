import { CardModalContentFish } from "@components/card-modal-content-fish";
import { CardModalRooms } from "@components/card-modal-rooms";
import { Section } from "@components/section";
import { styled } from "@linaria/react";
import fishImage1 from "../assets/fish-image-1.webp";
import fishImage2 from "../assets/fish-image-2.webp";
import fishImage3 from "../assets/fish-image-3.webp";
import fishImage4 from "../assets/fish-image-4.webp";
import videoLink from "../assets/video_fish.mp4";
import videoPreviewLink from "../assets/video_fish_poster.webp";

const StyledCardModal = styled(CardModalRooms)`
  height: 100%;
  max-height: none;
  overflow: auto;
`;

export const BoatsSmallBlock = () => {
  const modalProps = {
    videoLink,
    videoPreviewLink,
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
        videoLink={modalProps.videoLink}
        videoPreviewLink={modalProps.videoPreviewLink}
      >
        <CardModalContentFish />
      </StyledCardModal>
    </Section>
  );
};
