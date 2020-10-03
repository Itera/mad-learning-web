import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

type SectionProps = {
  grow: number;
};

export const Section = styled.div<SectionProps>`
  flex: ${({ grow }) => grow};
`;
