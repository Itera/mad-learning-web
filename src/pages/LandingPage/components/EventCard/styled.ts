import styled from 'styled-components';

import { ThemeProps } from '../../../../hooks/theme';

export const Container = styled.article`
  height: 100%;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.ON.PRIMARY};

  :hover {
    border-color: ${({ theme }: ThemeProps) => theme.colors.ON.PRIMARY_ACCENT};
    transition: 0.3s ease-out border-color;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({ theme }: ThemeProps) => {
    const padding = theme.typography.scaleSpacing(5);
    return `0 ${padding}px ${padding}px`;
  }};

  @media screen and (min-width: 400px) and (max-width: 620px),
    screen and (min-width: 820px) and (max-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${({ theme }: ThemeProps) => {
      const padding = theme.typography.scaleSpacing(5);
      return `0 ${padding}px`;
    }};
  }
`;

export const Content = styled.div``;

export const Heading = styled.h2`
  margin: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(5)}px 0;
`;
