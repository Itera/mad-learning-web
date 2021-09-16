import styled from 'styled-components';

export const EventFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
& > * {
  width:50%;
}
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const ButtonWrapper = styled.div`
  justifyContent: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  marginTop: 1rem;
`;
