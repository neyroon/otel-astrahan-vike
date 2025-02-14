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

  span {
    text-transform: uppercase;
  }
`;

export const Description = styled(Typography)`
  z-index: 1;
  opacity: 70%;
`;
export const GradientBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40.78%,
      rgba(0, 0, 0, 0.6) 78.61%
    ),
    linear-gradient(
      124.78deg,
      rgba(10, 5, 36, 0) 43.66%,
      rgba(10, 5, 36, 0.24) 90.82%
    ),
    linear-gradient(
      180deg,
      rgba(10, 5, 36, 0.32) 9.81%,
      rgba(10, 5, 36, 0) 21.69%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 30.7%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 39.94%, rgba(0, 0, 0, 0.48) 74.47%);

  border-radius: 28px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
