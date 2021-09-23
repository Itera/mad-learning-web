import styled from 'styled-components';

import { usingColors } from 'src/hooks/theme';

export const TagLayoutContainer = styled.div``;

export const TagContainer = styled.div`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  border-radius: 15px;
  background-color: ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
  color: ${usingColors((c) => c.ON.SECONDARY)};

  font-size: medium;
`;
