import styled from 'styled-components';
import { ThemeProps } from '../../hooks/theme';

export const CreateEventWrapper = styled.div`
  margin: 0 2.5vw;
`;

export const Form = styled.form`
  margin-bottom: 20px;
  font-weight: bold;
  width: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(16)}px;
  height: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(17)}px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
`;
