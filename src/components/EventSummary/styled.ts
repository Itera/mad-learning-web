import styled from 'styled-components';

import { usingTypography } from 'src/hooks/theme';

export const Container = styled.article`
  width: 250px;
  height: 100%;
`;

export const ImageContainer = styled.div`
  height: 150px;
  width: 100%;
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
`;

export const Heading = styled.h3`
  margin-top: ${usingTypography((t) => t.scaleSpacing(5))}px;
  margin-bottom: 0;
  font-size: ${usingTypography((t) => t.scaleFont(2))}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const BodyDetailsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const DetailItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const Icon = styled.img`
  min-width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const DetailText = styled.p`
  margin: 0;
  font-size: ${usingTypography((t) => t.scaleFont(1))}px;
`;
