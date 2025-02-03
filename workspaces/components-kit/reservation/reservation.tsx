import { Button } from "@foundation";
import { styled } from "@linaria/react";
import { ReservationBox } from "./reservation.styles";

const StyledButton = styled(Button)`
  width: 100%;
`;

export const Reservation = () => {
  return (
    <ReservationBox id="reservation">
      <div id="tl-search-form"></div>
      <StyledButton size="s" design="secondary" href="/about">
        О нашем проекте
      </StyledButton>
    </ReservationBox>
  );
};
