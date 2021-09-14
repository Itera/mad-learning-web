import React from 'react';
import Button from 'src/components/inputs/Button';
import { ConfirmationButtons, Message } from './styled';

type ConfirmationModalProps = {
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
};

function ConfirmationModal({
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  message,
}: ConfirmationModalProps) {
  return (
    <>
      <Message>{message}</Message>
      <ConfirmationButtons>
        <Button onClick={onConfirm}>{confirmText}</Button>
        <Button onClick={onCancel}>{cancelText}</Button>
      </ConfirmationButtons>
    </>
  );
}

export default ConfirmationModal;
