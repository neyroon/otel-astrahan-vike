import { Image, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const CardReviewBox = styled.div`
  border-radius: 28px;
  background-color: ${allColors.STUB};
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 26px;
  }
`;
export const TopTextBlock = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  border-bottom: 1px solid #4545451a;
  padding-bottom: 14px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledImage = styled(Image)`
  width: 100%;
  height: 16vw;
  width: calc(33% - 6px);
  img {
    border-radius: 8px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 80px;
  }
`;
export const Review = styled(Typography)`
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    min-height: 123px;
  }
`;

export const ShowAll = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 6px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;
