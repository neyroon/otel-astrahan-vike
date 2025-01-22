import { Section } from "@components/section";
import { styled } from "@linaria/react";

export const Box = styled.div``;

export const ReservationWidgetBlock = () => {
  return (
    <Section backgroundColor="dark-gray">
      <Box id="tl-booking-form"></Box>
    </Section>
  );
};
