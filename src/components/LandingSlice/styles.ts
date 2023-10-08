import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column-reverse;
  position: relative;
  display: flex;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 300px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  transform: scale(0.5);
  position: absolute;
  top: -100px;
  left: 700px;

  @media only screen and (min-width: 768px) {
    left: 0;
  }
`;

export const MainTitle = styled.span`
  position: absolute;
  left: 120px;
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 5.5rem;
  margin-top: 5rem;

  @media only screen and (min-width: 768px) {
    width: 50%;
    bottom: 60px;
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;
