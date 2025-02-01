import {
  InfoBox,
  InfoLayout,
} from "@components/card-room-big/card-room-big.styles";
import { Typography } from "@foundation";
import { useIsMobile } from "@hooks";
import { FunctionalComponent } from "preact";
import { CSSProperties } from "preact/compat";
import houseImage from "../assets/house-image.webp";
import {
  CardHouseBox,
  CardHouseContent,
  CardHouseText,
  Description,
  HouseImage,
  StyledButton,
  Title,
} from "./card-house.styles";

interface CardHouseProps {
  isHouseHovered?: boolean;
  mouseCoordsHouse?: { pageX: number; pageY: number };
  onClose?: () => void;
}

export const CardHouse: FunctionalComponent<CardHouseProps> = ({
  isHouseHovered,
  mouseCoordsHouse,
  onClose,
}) => {
  const isMobile = useIsMobile();

  const cardHouseStyles: CSSProperties = !isMobile
    ? {
        display: "block",
        left: mouseCoordsHouse.pageX,
        top: mouseCoordsHouse.pageY,
      }
    : {
        display: "block",
      };

  return (
    <CardHouseBox style={isHouseHovered && cardHouseStyles}>
      <HouseImage sources={[houseImage, houseImage]} />
      <CardHouseContent>
        <CardHouseText>
          <Typography size="18">Название домика</Typography>
          <Typography size="16" opacity={60}>
            Класс домика
          </Typography>
        </CardHouseText>
        <InfoLayout>
          <InfoBox>
            <Title size="15">Площадь: 48 m2</Title>
          </InfoBox>
          <InfoBox>
            <Description size="15">Гости: 4-5</Description>
          </InfoBox>
        </InfoLayout>
        {isMobile && (
          <StyledButton size="s" onClick={onClose}>
            Заказать звонок
          </StyledButton>
        )}
      </CardHouseContent>
    </CardHouseBox>
  );
};
