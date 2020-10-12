import styled from 'styled-components';

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
`;
TextArea.defaultProps = {
  rows: 5,
};
