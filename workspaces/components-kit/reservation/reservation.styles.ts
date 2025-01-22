import { Button } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const ReservationBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -70px;
  background-color: #fff;
  flex-shrink: 0;
  border-radius: 28px;
  text-align: center;
  z-index: 1;
  scroll-margin-top: 123px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-top: 0;
    padding: 40px;
    scroll-margin-top: 123px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  user-select: none;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 18px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-top: 0;
  }
`;
