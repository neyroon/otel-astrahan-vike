import { CloseIcon } from "@foundation";
import { useOnClickOutside } from "@hooks";
import { useRef } from "preact/hooks";
import { Backdrop, Content, IconBox, ModalBox } from "./modal.styles";

export const Modal = ({ isOpen, onClose, children }) => {
  const contentRef = useRef(null);
  useOnClickOutside(contentRef, onClose);
  return (
    <ModalBox style={{ visibility: isOpen ? "visible" : "hidden" }}>
      <Backdrop />
      <Content
        style={isOpen && { transform: "translateY(0)" }}
        ref={contentRef}
      >
        {children}
        <IconBox onClick={onClose}>
          <CloseIcon />
        </IconBox>
      </Content>
    </ModalBox>
  );
};
