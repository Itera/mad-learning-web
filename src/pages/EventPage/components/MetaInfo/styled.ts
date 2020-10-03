import styled from 'styled-components';

import { ThemeProps } from '../../../../hooks/theme';

export const MetaInfoGroup = styled.dl`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(6)}px;
  color: ${({ theme }: ThemeProps) => theme.colors.ON.SECONDARY};
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.SURFACE.SECONDARY};
  line-height: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(9)}px;
`;

export const MetaInfoLabel = styled.dt`
  flex: 10%;
  font-weight: bold;
`;

export const MetaInfoValue = styled.dl`
  flex: 90%;
`;
