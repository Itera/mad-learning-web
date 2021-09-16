import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.ul`
  margin-top: 0;
  margin-right: 10px;
  padding: 10px;
  display: inline-block;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

export const HelpText = styled.ul`
  color: grey;
  padding-left: 0;
`;
