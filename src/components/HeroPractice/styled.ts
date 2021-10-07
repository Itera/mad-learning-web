import { usingColors, usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin: 0 auto;
  gap: 30px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: ${usingTypography((t) => t.scaleSpacing(3))}px;
  & > * {
    margin-top: ${usingTypography((t) => t.scaleSpacing(1))}px;
    margin-bottom: ${usingTypography((t) => t.scaleSpacing(1))}px;
  }
`;

export const HeroLink = styled.a`
  font-size: ${usingTypography((t) => t.scaleSpacing(6))}px;
  text-decoration: underline;
  color: ${usingColors((c) => c.SURFACE.TERTIARY)};
`;

export const HeroTitle = styled.h2`
  font-size: ${usingTypography((t) => t.scaleSpacing(8))}px;
`;

export const HeroText = styled.p`
  font-size: ${usingTypography((t) => t.scaleSpacing(6))}px;
`;

export const HeroButton = styled.a`
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  transition: 500ms ease-in-out;
  background-color: ${usingColors((c) => c.SURFACE.TERTIARY)};
  &:hover {
    color: ${usingColors((c) => c.SURFACE.PRIMARY)} !important;
    background-color: ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
  }
`;

export const HeroImage = styled.img`
  width: 400px;
  height: 300px;
`;
