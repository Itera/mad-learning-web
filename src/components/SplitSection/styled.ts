import styled from 'styled-components';
import { usingColors, usingTypography } from 'src/hooks/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1060px) {
    flex-direction: row;
  }
`;

type SectionProps = {
  grow: number;
};

export const Section = styled.div<SectionProps>`
  flex: ${({ grow }) => grow};
`;

export const Divider = styled.div`
  display: none;

  @media screen and (min-width: 1060px) {
    display: block;
    margin: 0 ${usingTypography((t) => t.scaleSpacing(7))}px;
    border-left: 1px solid ${usingColors((c) => c.ON.PRIMARY)};
  }
`;
