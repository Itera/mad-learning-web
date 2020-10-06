import styled from 'styled-components';

import { usingTypography } from '../../hooks/theme';

export const CreateEventWrapper = styled.div`
  margin: 0 2.5vw;
`;

export const Form = styled.form`
  margin-bottom: 20px;
  font-weight: bold;
  width: ${usingTypography((t) => t.scaleSpacing(16))}px;
  height: ${usingTypography((t) => t.scaleSpacing(17))}px;
`;
