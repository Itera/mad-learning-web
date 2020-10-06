import styled from 'styled-components';

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
