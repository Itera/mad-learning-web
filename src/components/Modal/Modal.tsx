import React from 'react';
import ReactDOM from 'react-dom';
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './styled';

type ModalProps = {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
};

function Modal({ isShown, hide, modalContent, headerText }: ModalProps) {
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export default Modal;
