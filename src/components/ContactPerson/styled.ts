import styled from 'styled-components';
import { usingTypography } from 'src/hooks/theme';

export const ContactPersonContainer = styled.div`
  width: 400px;
  height: 200px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const FieldsContainer = styled.div`
  margin-left: 15px;
  justify-content: center;
  vertical-align: left;
`;

export const ContactPersonImage = styled.img`
  width: 100px;
  height: 100px;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
`;

export const ContactPersonField = styled.p`
  width: 0 auto;
  font-size: 15px;
  font-family: 'IBMPlexSans';
`;