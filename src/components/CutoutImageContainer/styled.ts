import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const TempColumn = styled.div`
  display: flex;
  justify-content: center;
`;

export const OuterDiv = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CutoutImageText = styled.h3`
  margin-top: ${usingTypography((t) => t.scaleSpacing(5))}px;
  margin-bottom: 0;
  font-size: ${usingTypography((t) => t.scaleFont(2))}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;