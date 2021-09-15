import React from 'react';
import Button from 'src/components/inputs/Button';
import { Controls, Message } from './styled';

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
      <Controls>
        <Button onClick={onConfirm}>{confirmText}</Button>
        <Button onClick={onCancel}>{cancelText}</Button>
      </Controls>
    </>
  );
}

export default ConfirmationModal;
