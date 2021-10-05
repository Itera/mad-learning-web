import styled from 'styled-components';

export const HeroWrapper = styled.section`
  margin: 2.5vw;
  margin-right: -2.5vw;
  margin-left: -2.5vw;
`;

export const HeroContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 15px;
  & > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const HeroLink = styled.a`
  font-size: 15px;
  text-decoration: underline;
  color: blue;
`;

export const HeroTitle = styled.h2`
  font-size: 30px;
`;

export const HeroText = styled.p`
  font-size: 15px;
`;

export const HeroButtonContainer = styled.div`
  display: flex;
`;

export const HeroButton = styled.a`
  width: 120px;
  height: 40px;
  position: relative;
  justify-content: center;
  background-color: blue;
  margin-bottm: 0px;
  &:hover {
    background-color: purple;
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
  font-size: 15px;
  font-weight: bold;
`;

export const HeroImage = styled.img`
  width: 500px;
  height: 300px;
`;
