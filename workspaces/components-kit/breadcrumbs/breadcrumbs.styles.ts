import { Image, Link, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const BreadcrumbsBox = styled.div`
  width: 100%;
  position: relative;
  height: 158px;
  overflow: hidden;
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  margin-top: 28px;
  background-color: ${allColors.DARK_GRAY};

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: 0;
    height: 236px;
    margin-top: 68px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  bottom: 28px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: start;
    transform: none;
    gap: 16px;
    width: auto;
    left: 28px;
    bottom: 15px;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  gap: 8px;
  z-index: 1;
`;

export const MainLink = styled(Link)``;

export const CurrentPageText = styled(Typography)``;

export const MainText = styled(Typography)`
  z-index: 1;
`;

export const Background = styled(Image)`
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
    object-fit: cover;
  }
`;

export const GradientBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
