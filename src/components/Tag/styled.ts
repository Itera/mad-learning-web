import styled from 'styled-components';

export const TagContainer = styled.div`
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-right: 10px;
  margin-bottom: 10px;

  font-size: ${(props) => props.theme.fontSize};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.foregroundColor};
`;
