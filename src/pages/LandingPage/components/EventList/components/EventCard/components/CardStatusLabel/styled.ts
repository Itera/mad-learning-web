import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
  position: relative;
  color: white;
`;

export const Label = styled.ul`
  top: 0;
  left: 0;
  position: absolute;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: ${usingTypography((t) => t.scaleFont(5))}px;
`;

export const HelpText = styled.ul`
  padding-left: 0;
  font-size: ${usingTypography((t) => t.scaleFont(-3))}px;
`;
