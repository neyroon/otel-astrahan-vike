import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";
import { Button, Typography } from "../../foundation-kit";
import { Image } from "../../foundation-kit/image";

export const BannerSlideBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 28px;
  border: 1px solid ${allColors.COLUMBIA_BLUE};

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 660px;
    border: none;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-top: 16px;
  margin-bottom: 26px;
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  min-height: 250px;

  & img {
    border-radius: 28px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 250px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    & img {
      border-bottom-left-radius: 28;
      border-bottom-right-radius: 28;
    }
  }
`;

export const BottomText = styled.div``;

export const FeatureTextBox = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: row;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: column;
    gap: 2px;
  }
`;

export const FeatureIconBox = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    background-color: ${allColors.WHITE};
    border-radius: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  padding: 4px;
  gap: 16px;
  align-items: center;
  background-color: #f1f3f6;
  border-radius: 8px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 24px;
    width: 100%;
  }
`;

export const FeaturesBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardBox = styled.div`
  background-color: ${allColors.WHITE};
  border-radius: 28px;
  padding: 14px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 548px;
    padding: 26px;
    position: absolute;
    left: 40px;
    bottom: 40px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 42px;
`;
