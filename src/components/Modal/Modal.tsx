import { useEffect, FC, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent, CloseBtn } from "./Modal.styled";
import { BsXLg } from "react-icons/bs";

const modalRoot = document.querySelector("#modal-root") as
  | HTMLElement
  | DocumentFragment;

interface IModal {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<IModal> = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent className="modalContent">
        <CloseBtn onClick={onClose}>
          <BsXLg />
        </CloseBtn>
        {children}
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
