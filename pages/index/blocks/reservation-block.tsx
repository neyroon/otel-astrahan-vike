import { Banner } from "@components/banner";
import { BannerSlide } from "@components/banner-slide";
import { Group } from "@components/group";
import { Reservation } from "@components/reservation";
import { Section } from "@components/section";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import houseImg1 from "../assets/house1.webp";
import houseImg2 from "../assets/house2.webp";

const StyledSection = styled(Section)`
  padding-top: 20px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding-top: 123px;
  }
`;

export const ReservationBlock = () => {
  return (
    <StyledSection backgroundColor="dark-gray">
      <Group>
        <Banner>
          <BannerSlide imageLink1x={houseImg1} imageLink2x={houseImg1} />
          <BannerSlide imageLink1x={houseImg2} imageLink2x={houseImg2} />
        </Banner>
        <Reservation />
      </Group>
    </StyledSection>
  );
};
