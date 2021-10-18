import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const TempColumn = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export const OuterDiv = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

export const CutoutImageText = styled.h3`
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;
