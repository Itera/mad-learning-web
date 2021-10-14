import { usingColors } from 'src/hooks/theme';
import styled from 'styled-components';

// Container for usage of ShortcutLinks components
export const ShortcutLinkContainer = styled.section`
  margin: 15px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px 30px;
`;

export const ShortcutLinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
`;

export const ShortcutLinkField = styled.section`
  width: 320px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${usingColors((t) => t.ON.SECONDARY_ACCENT)};

  &:hover {
    color: ${usingColors((t) => t.ON.PRIMARY_ACCENT)};
  }
`;

// Margin 0 to override global margin of 10px top and bottom for <p>
export const ShortcutLinkText = styled.p`
  margin: 0;
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
