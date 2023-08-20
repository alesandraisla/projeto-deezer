import React from 'react';
import { ModalContainer, ModalOverlay} from "./ModalStyles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalOverlay className={isOpen ? 'open' : ''} onClick={onClose}>
      <ModalContainer>
        {/* <button onClick={onClose}>Fechar</button> */}
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
