import {
  InfoBox,
  InfoLayout,
} from "@components/card-room-big/card-room-big.styles";
import { Typography } from "@foundation";
import { useIsMobile } from "@hooks";
import { FunctionalComponent } from "preact";
import { CSSProperties } from "preact/compat";
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
  title: string;
  description?: string;
  imagelink: string;
  isHovered?: boolean;
  square?: string;
  ishouse: boolean;
  mouseCoordsHouse?: { pageX: number; pageY: number };
  onClose?: () => void;
}

export const CardHouse: FunctionalComponent<CardHouseProps> = ({
  title,
  description,
  square,
  imagelink,
  isHovered,
  ishouse,
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
    <CardHouseBox style={isHovered && cardHouseStyles}>
      <HouseImage sources={[imagelink, imagelink]} />
      <CardHouseContent>
        <CardHouseText>
          <Typography size="18">{title}</Typography>
          <Typography size="16" opacity={60}>
            {description}
          </Typography>
        </CardHouseText>
        {ishouse && (
          <InfoLayout>
            <InfoBox>
              <Title size="15">Площадь: {square} м²</Title>
            </InfoBox>
            <InfoBox>
              <Description size="15">Гости: 4-5</Description>
            </InfoBox>
          </InfoLayout>
        )}
        {isMobile && (
          <StyledButton size="s" onClick={onClose}>
            Заказать звонок
          </StyledButton>
        )}
      </CardHouseContent>
    </CardHouseBox>
  );
};
