import { usingTypography, usingColors } from 'src/hooks/theme';
import styled from 'styled-components';

type TagContainerProps = {
  selected?: boolean;
  onClick?: () => void;
};

export const TagContainer = styled.div<TagContainerProps>`
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-right: 10px;
  margin-bottom: 10px;

  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  background-color: ${(props) =>
    props.selected
      ? usingColors((c) => c.ON.PRIMARY_ACCENT)
      : usingColors((c) => c.SURFACE.PRIMARY)};
  color: ${(props) =>
    props.selected
      ? usingColors((c) => c.SURFACE.PRIMARY)
      : usingColors((c) => c.ON.PRIMARY_ACCENT)};
`;
