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
  margin-left: ${usingTypography((t) => t.scaleSpacing(4))}px;
  justify-content: center;
  vertical-align: left;
`;

export const ContactPersonImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ContactPersonField = styled.p`
  width: 0 auto;
  font-size: ${usingTypography((t) => t.scaleSpacing(6))}px;
  font-family: 'IBMPlexSans';
`;
