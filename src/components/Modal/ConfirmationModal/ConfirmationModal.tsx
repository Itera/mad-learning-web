import React from 'react';
import Button from 'src/components/inputs/Button';
import { ConfirmationButtons, Message } from './styled';

type ConfirmationModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
};

function ConfirmationModal({
  onConfirm,
  onCancel,
  message,
}: ConfirmationModalProps) {
  return (
    <>
      <Message>{message}</Message>
      <ConfirmationButtons>
        <Button onClick={onConfirm}>Confirm</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ConfirmationButtons>
    </>
  );
}

export default ConfirmationModal;
