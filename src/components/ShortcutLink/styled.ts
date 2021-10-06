import { usingColors } from 'src/hooks/theme';
import styled from 'styled-components';

export const ShortcutLinkWrapper = styled.a`
  margin: 30px;
  display: flex;
  flex-direction: column;
  & > * {
    color: ${usingColors((t) => t.ON.SECONDARY_ACCENT)};
    width: 350px;
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
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

export const ShortcutBorder = styled.div`
  background-color: ${usingColors((t) => t.SURFACE.PRIMARY_VARIANT)};
  height: 1px;
`;
