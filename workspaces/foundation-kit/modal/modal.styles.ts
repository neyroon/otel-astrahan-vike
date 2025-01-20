import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const ModalBox = styled.div`
  visibility: hidden;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;
export const Content = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${allColors.WHITE};

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 28px;
    max-width: 80vw;
  }

  @media screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    max-width: 1280px;
  }
`;

export const IconBox = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  top: -70px;
  right: 15px;
  cursor: pointer;
`;
