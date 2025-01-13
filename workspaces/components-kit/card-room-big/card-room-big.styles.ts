import { Image } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const CardRoomBigBox = styled.div`
  border-radius: 28px;
  background-color: ${allColors.WHITE};
`;

export const StyledImage = styled(Image)`
  height: 400px;
  width: 100%;

  img {
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: 32px;
    gap: 28px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 16px;
  }
`;

export const InfoLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const InfoBox = styled.div`
  padding: 12px 8px;
  border-radius: 8px;
  background-color: #edeff2;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  & > * {
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 16px;
    flex-direction: row;

    & > * {
      width: auto;
    }
  }
`;
