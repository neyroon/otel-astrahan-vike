import { Button, Image, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const CardHouseBox = styled.div`
  flex-direction: column;
  display: none;
  background-color: ${allColors.WHITE};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    position: fixed;
    width: 392px;
    border-radius: 16px;
    z-index: 10;
  }
`;

export const CardHouseContent = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: 20px;
    gap: 25px;
  }
`;

export const CardHouseText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HouseImage = styled(Image)`
  width: 100%;
  height: 248px;

  img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled(Typography)`
  font-size: 16px;
`;
