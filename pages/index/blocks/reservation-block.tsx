import { Banner } from "@components/banner";
import { BannerSlide } from "@components/banner-slide";
import { Group } from "@components/group";
import { Reservation } from "@components/reservation";
import { Section } from "@components/section";
import { styled } from "@linaria/react";
import houseImg from "../assets/house.png";

const StyledSection = styled(Section)`
  padding-top: 123px;
`;

export const ReservationBlock = () => {
  return (
    <StyledSection backgroundColor="dark-gray">
      <Group>
        <Banner>
          <BannerSlide imageLink1x={houseImg} imageLink2x={houseImg} />
          <BannerSlide imageLink1x={houseImg} imageLink2x={houseImg} />
          <BannerSlide imageLink1x={houseImg} imageLink2x={houseImg} />
          <BannerSlide imageLink1x={houseImg} imageLink2x={houseImg} />
          <BannerSlide imageLink1x={houseImg} imageLink2x={houseImg} />
        </Banner>
        <Reservation />
      </Group>
    </StyledSection>
  );
};
