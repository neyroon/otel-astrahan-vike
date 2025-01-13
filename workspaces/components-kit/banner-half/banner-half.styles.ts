import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const BannerBox = styled.div`
  position: relative;
  border-radius: 28px;
  width: 100%;

  & .swiper {
    border-radius: 28px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 40px;
    right: 40px;
  }
`;
