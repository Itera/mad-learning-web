import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  line-height: ${usingTypography((t) => t.scaleSpacing(9))}px;
  text-decoration: underline;
& > * {
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  gap: 10px;
}
`;

export const AttributionLink = styled.a`
  font-size: 12px;
  color: lightgrey;
`