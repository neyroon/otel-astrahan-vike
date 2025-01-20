import { useIsMobile, useOnClickOutside } from "@hooks";
import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { CloseIcon } from "../icons/close";
import { Backdrop, Content, IconBox, ModalBox } from "./modal.styles";

interface Modal {
  isOpen: boolean;
  onClose?: () => {};
}

export const Modal: FunctionalComponent<Modal> = ({
  isOpen,
  onClose,
  children,
}) => {
  const contentRef = useRef(null);
  const isMobile = useIsMobile();
  const handleModalClose = () => {
    document.body.style.overflow = "visible";
    onClose();
  };

  useOnClickOutside(contentRef, handleModalClose);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
  }, [isOpen]);

  return (
    <ModalBox style={{ visibility: isOpen ? "visible" : "hidden" }}>
      <Backdrop />
      <Content ref={contentRef}>
        {children}
        <IconBox onClick={handleModalClose}>
          <CloseIcon />
        </IconBox>
      </Content>
    </ModalBox>
  );
};
