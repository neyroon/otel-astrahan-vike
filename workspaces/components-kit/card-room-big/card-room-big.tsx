import { CardModal } from "@components/card-modal";
import { Button, Modal, Typography } from "@foundation";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import {
  Buttons,
  CardRoomBigBox,
  Content,
  InfoBox,
  InfoLayout,
  StyledImage,
} from "./card-room-big.styles";

interface CardRoomBigProps {
  imageLink1x: string;
  imageLink2x: string;
  title: string;
  description?: string;
  square: string;
  peoples: string;
  bedrooms: string;
  lounge?: string;
  doubleBed?: string;
  sofaBed?: string;
  button1text?: string;
  withButtons?: boolean;

  modalImageLink1: string;
  modalImageLink2: string;
  modalImageLink3: string;
  modalImageLink4: string;
  modalImageLink5?: string;
  modalImageLink6?: string;
}

export const CardRoomBig: FunctionComponent<CardRoomBigProps> = ({
  imageLink1x,
  imageLink2x,
  title,
  description,
  square,
  peoples,
  bedrooms,
  lounge,
  doubleBed,
  sofaBed,
  button1text = "Выбрать дату",
  withButtons = true,
  children,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <CardRoomBigBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
      <Content>
        <Typography size="28">{title}</Typography>
        {description && (
          <Typography size="16" opacity={70}>
            {description}
          </Typography>
        )}
        <InfoLayout>
          <InfoBox>
            <Typography size="15">{square}</Typography>
          </InfoBox>
          <InfoBox>
            <Typography size="15">{peoples}</Typography>
          </InfoBox>
          <InfoBox>
            <Typography size="15">{bedrooms}</Typography>
          </InfoBox>
          {lounge && (
            <InfoBox>
              <Typography size="15">{lounge}</Typography>
            </InfoBox>
          )}
          {doubleBed && (
            <InfoBox>
              <Typography size="15">{doubleBed}</Typography>
            </InfoBox>
          )}
          {sofaBed && (
            <InfoBox>
              <Typography size="15">{sofaBed}</Typography>
            </InfoBox>
          )}
        </InfoLayout>

        {withButtons && (
          <Buttons>
            <Button size="s">{button1text}</Button>
            <Button
              size="s"
              design="secondary"
              elementAs="button"
              onClick={handleModalOpen}
            >
              Подробнее
            </Button>
          </Buttons>
        )}
      </Content>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <CardModal
            imageLink1={props.modalImageLink1}
            imageLink2={props.modalImageLink2}
            imageLink3={props.modalImageLink3}
            imageLink4={props.modalImageLink4}
            imageLink5={props.modalImageLink5}
            imageLink6={props.modalImageLink6}
          >
            {children}
          </CardModal>
        </Modal>
      )}
    </CardRoomBigBox>
  );
};
