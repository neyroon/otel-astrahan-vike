import { styled } from "@linaria/react";

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
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  transition: transform 0.4s ease;
  transform: translateY(100%);
`;

export const IconBox = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  top: -70px;
  right: 15px;
`;
