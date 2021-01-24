import styled from 'styled-components';

import { usingTypography, ThemeProps } from 'src/hooks/theme';

export const Container = styled.article`
  height: 100%;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.ON.PRIMARY};

  :hover {
    border-color: ${({ theme }: ThemeProps) => theme.colors.ON.PRIMARY_ACCENT};
    transition: 0.3s ease-out border-color;
  }
`;

export const ImageContainer = styled.div`
  height: 350px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${usingTypography((t) => t.scaleSpacing(5))}px;
  padding-bottom: ${usingTypography((t) => t.scaleSpacing(2))}px;

  @media screen and (min-width: 400px) and (max-width: 620px),
    screen and (min-width: 820px) and (max-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${usingTypography((t) => t.scaleSpacing(5))}px;
    padding-top: ${usingTypography((t) => t.scaleSpacing(2))}px;
  }
`;

export const Content = styled.div``;

export const Heading = styled.h2`
  margin: ${({ theme }: ThemeProps) => theme.typography.scaleSpacing(5)}px 0;

  @media screen and (min-width: 400px) and (max-width: 620px),
    screen and (min-width: 820px) and (max-width: 1400px) {
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
