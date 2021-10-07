import { usingColors } from 'src/hooks/theme';
import styled from 'styled-components';

export const ShortcutLinkWrapper = styled.a`
  margin: 16px 32px;
  display: flex;
  flex-direction: column;
  & > * {
    color: ${usingColors((t) => t.ON.SECONDARY_ACCENT)};
    width: 320px;
    height: 50px;

    &: hover {
      color: ${usingColors((t) => t.ON.PRIMARY_ACCENT)};
    }
  }
`;

export const ShortcutLinkField = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ShortcutLinkText = styled.p`
  margin: 0 5px;
  padding-right: 10px;

  font-size: 1.2rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShortcutBorder = styled.div`
  background-color: ${usingColors((t) => t.SURFACE.PRIMARY_VARIANT)};
  height: 1px;
`;
