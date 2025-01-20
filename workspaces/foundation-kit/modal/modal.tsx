import { CloseIcon } from "@foundation";
import { useIsMobile, useMountTransition, useOnClickOutside } from "@hooks";
import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
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
  const hasTransitionedIn = useMountTransition(isOpen, 400);
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
      <Content
        style={
          hasTransitionedIn && {
            transform: isMobile && "translateY(0)",
            opacity: !isMobile && 1,
          }
        }
        ref={contentRef}
      >
        {children}
        <IconBox onClick={handleModalClose}>
          <CloseIcon />
        </IconBox>
      </Content>
    </ModalBox>
  );
};
