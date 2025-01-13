import { Button, Typography } from "@foundation";
import { FunctionComponent } from "react";
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
}) => {
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
            <Button size="s" design="secondary">
              Подробнее
            </Button>
          </Buttons>
        )}
      </Content>
    </CardRoomBigBox>
  );
};
