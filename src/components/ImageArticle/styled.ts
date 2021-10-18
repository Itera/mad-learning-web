import styled from 'styled-components';
import { usingTypography } from 'src/hooks/theme';

export const CenteredWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const ArticleContainer = styled.a`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
`;

export const ArticleTitle = styled.h3`
  font-size: 30px;
  font-family: 'IBMPlexSans';
`;

export const ArticleText = styled.p`
  font-size: 20px;
  font-family: 'IBMPlexSans';
`;

export const ArticleLink = styled.p`
  font-size: 20px;
  font-family: 'IBMPlexSans';
  text-decoration: underline;
  color: blue;
`;

export const ArticleImage = styled.img`
  width: 500px;
  height: 300px;
`;
