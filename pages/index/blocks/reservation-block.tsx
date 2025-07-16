import { Banner } from "@components/banner";
import { BannerSlide } from "@components/banner-slide";
import { Group } from "@components/group";
import { Reservation } from "@components/reservation";
import { Section } from "@components/section";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";
import video1Poster from "../assets/1-poster.webp";
import video1MP4 from "../assets/1.mp4";

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
          <BannerSlide videoSrcMP4={video1MP4} poster={video1Poster} />
        </Banner>
        <Reservation />
      </Group>
    </StyledSection>
  );
};
