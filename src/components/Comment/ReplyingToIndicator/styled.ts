import { usingTypography } from 'src/hooks/theme';
import styled from 'styled-components';

export const IndicatorWrapper = styled.span`
  display: inline-block;
  width: 100%;
  max-width: ${usingTypography((t) => t.scaleSpacing(18))}px;
  padding: 20px;

  background-color: #f0f0f0;
  color: #a0a0a0;

  & > p {
    display: inline-block;
    margin: 0;
  }

  & > a {
    display: block;
    float: right;
    margin-right: 20px;
  }
`;
