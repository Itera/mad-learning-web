import styled from 'styled-components';

export const CreateEventWrapper = styled.div`
  margin: 0 2.5vw;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 10px;
  row-gap: 15px;
  margin-bottom: 20px;

  input, textarea, select {
    width: 250px;
  }

  textarea {
    height: 50px;
  }
`;
