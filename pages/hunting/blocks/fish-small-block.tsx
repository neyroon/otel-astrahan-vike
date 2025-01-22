import { CardLayout } from "@components/card-layout";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import { Button } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import cardFishSmall1 from "../assets/card-fish-image-1.webp";
import cardFishSmall2 from "../assets/card-fish-image-2.webp";
import cardFishSmall3 from "../assets/card-fish-image-3.webp";
import cardFishSmall4 from "../assets/card-fish-image-4.webp";

const StyledButton = styled(Button)`
  margin-top: 20px;
  align-self: center;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-top: 60px;
    width: 657px;
  }
`;

export const FishSmallBlock = () => {
  return (
    <Section title="Номера гиды" backgroundColor="dark-gray">
      <CardLayout variant="m">
        <CardRoomBig
          imageLink1x={cardFishSmall1}
          imageLink2x={cardFishSmall1}
          title="Кондрат Савельев"
          square="Охота"
          peoples="Подводная охота"
          bedrooms="Рыболовный гид"
          withButtons={false}
        />
        <CardRoomBig
          imageLink1x={cardFishSmall2}
          imageLink2x={cardFishSmall2}
          title="Владислав Капканов"
          square="Охота"
          peoples="Подводная охота"
          bedrooms="Рыболовный гид"
          withButtons={false}
        />
        <CardRoomBig
          imageLink1x={cardFishSmall3}
          imageLink2x={cardFishSmall3}
          title="Сергей Охотников"
          square="Охота"
          peoples="Подводная охота"
          bedrooms="Рыболовный гид"
          withButtons={false}
        />
        <CardRoomBig
          imageLink1x={cardFishSmall4}
          imageLink2x={cardFishSmall4}
          title="Игорь Сафонов"
          square="Охота"
          peoples="Подводная охота"
          bedrooms="Рыболовный гид"
          withButtons={false}
        />
      </CardLayout>
      <StyledButton>Хочу порыбачить</StyledButton>
    </Section>
  );
};
