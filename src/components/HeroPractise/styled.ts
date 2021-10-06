import { usingColors, usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
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
  font-size:  ${usingTypography((t) => t.scaleSpacing(8))}px;
`;

export const HeroText = styled.p`
  font-size:  ${usingTypography((t) => t.scaleSpacing(6))}px;
`;

export const HeroButtonContainer = styled.div`
  display: flex;
`;

export const HeroButton = styled.a`
  width: 120px;
  height: 40px;
  position: relative;
  justify-content: center;
  background-color: ${usingColors((c) => c.SURFACE.TERTIARY)};
  &:hover {
    background-color: ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
  }
`;

export const HeroButtonText = styled.p`
  height: 20px;
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: absolute;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: ${usingTypography((t) => t.scaleSpacing(6))}px;
`;

export const HeroImage = styled.img`
  width: 400px;
  height: 300px;
`;
