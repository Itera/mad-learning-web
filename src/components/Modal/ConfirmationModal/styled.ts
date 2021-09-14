import styled from 'styled-components';
import { usingTypography } from 'src/hooks/theme';

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
export const Message = styled.div`
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  margin-bottom: 10px;
  text-align: center;
`;
