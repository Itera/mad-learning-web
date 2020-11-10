import styled from 'styled-components';

import { usingTypography, usingColors } from 'src/hooks/theme';

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px;
  border: 1px solid ${usingColors((c) => c.ON.PRIMARY)};
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
`;
TextArea.defaultProps = {
  rows: 5,
};
