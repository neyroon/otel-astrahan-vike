import { Image, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const PosterCardBox = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 26px;
  border-radius: 28px;
  justify-content: space-between;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 510px;
  }
`;

export const StyledImage = styled(Image)`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  img {
    border-radius: 28px;
  }
`;

export const BottomTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateText = styled(Typography)`
  z-index: 1;
  text-transform: uppercase;
`;

export const Title = styled(Typography)`
  z-index: 1;
  margin-bottom: 8px;
`;

export const Description = styled(Typography)`
  z-index: 1;
  opacity: 70%;
`;
