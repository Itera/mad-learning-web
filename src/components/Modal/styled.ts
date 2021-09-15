import styled from 'styled-components';
import { usingColors, usingTypography } from 'src/hooks/theme';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div`
  background: white;
  position: relative;
  margin: auto;
  max-width: 30rem;
`;
export const Header = styled.div`
  background-color: ${usingColors((c) => c.SURFACE.SECONDARY)};
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  color: ${usingColors((c) => c.ON.SECONDARY)};
  align-self: center;
  color: lightgray;
`;
export const CloseButton = styled.button`
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
  color: white;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
