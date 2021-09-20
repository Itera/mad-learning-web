import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const IndicatorWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${usingTypography((t) => t.scaleSpacing(18))}px;
  padding: 20px;

  background-color: #f0f0f0;
  color: #a0a0a0;

  & > p {
    display: inline-block;
    margin: 0;
  }
`;

export const AbortButton = styled.button`
  padding: 5px;
  border: none;
  font-size: large;

  &:hover {
    cursor: pointer;
  }
`;
