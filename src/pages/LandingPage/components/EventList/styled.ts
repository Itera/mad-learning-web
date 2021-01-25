import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

const MIN_COL_WIDTH = 300;
const MAX_COL_WIDTH = 400;

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    1,
    minmax(${MIN_COL_WIDTH}px, ${MAX_COL_WIDTH}px)
  );
  grid-gap: ${usingTypography((t) => t.scaleSpacing(5))}px;
  justify-content: center;
  margin: auto;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(
      2,
      minmax(${MIN_COL_WIDTH}px, ${MAX_COL_WIDTH}px)
    );
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(
      3,
      minmax(${MIN_COL_WIDTH}px, ${MAX_COL_WIDTH}px)
    );
  }

  @media screen and (min-width: 1480px) {
    grid-template-columns: repeat(
      4,
      minmax(${MIN_COL_WIDTH}px, ${MAX_COL_WIDTH}px)
    );
  }
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
