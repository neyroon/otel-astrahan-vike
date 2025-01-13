import { FunctionalComponent } from "preact";
import {
  BottomTextBox,
  DateText,
  Description,
  PosterCardBox,
  StyledImage,
  Title,
} from "./poster-card.styles";

interface PosterCardProps {
  title: string;
  description: string;
  date: string;
  imageLink1x: string;
  imageLink2x: string;
}

export const PosterCard: FunctionalComponent<PosterCardProps> = ({
  title,
  description,
  date,
  imageLink1x,
  imageLink2x,
}) => {
  return (
    <PosterCardBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
      <DateText size="18" color="white">
        {date}
      </DateText>
      <BottomTextBox>
        <Title size="28" color="white">
          {title}
        </Title>
        <Description size="16" color="white">
          {description}
        </Description>
      </BottomTextBox>
    </PosterCardBox>
  );
};
