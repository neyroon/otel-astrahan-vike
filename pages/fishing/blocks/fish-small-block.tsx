import { CardLayout } from "@components/card-layout";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import { Button } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import cardFishSmall1 from "../assets/card-fish-image-1.png";
import cardFishSmall2 from "../assets/card-fish-image-2.png";
import cardFishSmall3 from "../assets/card-fish-image-3.png";
import cardFishSmall4 from "../assets/card-fish-image-4.png";
import cardFishSmall5 from "../assets/card-fish-image-5.png";
import cardFishSmall6 from "../assets/card-fish-image-6.png";

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
    <Section title="Номера плавучего дома" backgroundColor="dark-gray">
      <CardLayout variant="s">
        <CardRoomBig
          imageLink1x={cardFishSmall1}
          imageLink2x={cardFishSmall1}
          title="Катер-Турбо бабка"
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
          title="Сергей Охотников"
          square="Охота"
          peoples="Подводная охота"
          bedrooms="Рыболовный гид"
          withButtons={false}
        />
        <CardRoomBig
          imageLink1x={cardFishSmall5}
          imageLink2x={cardFishSmall5}
          title="Сергей Охотников"
          square="Охота"
          peoples="Подводная охота"
          bedrooms="Рыболовный гид"
          withButtons={false}
        />
        <CardRoomBig
          imageLink1x={cardFishSmall6}
          imageLink2x={cardFishSmall6}
          title="Сергей Охотников"
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
