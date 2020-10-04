import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const GridList = styled.ul`
  margin: 0 auto;
  padding: 0;
`;

export const GridItem = styled.li`
  display: inline-block;
  width: 95vw;
  margin-bottom: ${usingTypography((t) => t.scaleSpacing(7))}px;

  @media screen and (min-width: 620px) {
    width: 45vw;
    margin: 0 1.25vw 2.5vw;
  }

  @media screen and (min-width: 1250px) {
    width: 29vw;
  }
`;

export const EventInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EventInfo = styled.li``;

export const DateInfo = styled.span`
  font-weight: bold;
`;
