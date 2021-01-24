import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

const MAX_NUM_COL = 4;
const MAX_COL_WIDTH = 350;
const HOR_MARGIN_LEVEL = 7;

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${MAX_COL_WIDTH}px, 1fr));
  grid-gap: ${usingTypography((t) => t.scaleSpacing(5))}px;
  margin: auto;
  padding: 0;
  max-width: ${usingTypography((t) => {
    const horMargins = t.scaleSpacing(HOR_MARGIN_LEVEL) * 2;
    const colWidth = horMargins + MAX_COL_WIDTH;
    return colWidth * MAX_NUM_COL;
  })}px;
  list-style-type: none;
`;

export const GridItem = styled.li``;

export const EventInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EventInfo = styled.li``;

export const DateInfo = styled.span`
  font-weight: bold;
`;
