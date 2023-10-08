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
  @media only screen and (min-width: 1024px) {
    position: "";
    justify-content: space-between;
  }
  @media only screen and (min-width: 1280px) {
    position: "";
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
  transform: scale(0.2);
  position: absolute;
  top: -240px;
  left: 30px;

  @media only screen and (min-width: 768px) {
    left: 0;
  }

  @media only screen and (min-width: 1024px) {
    transform: scale(0.3);
    left: 180px;
  }

  @media only screen and (min-width: 1280px) {
    display: inline-block;
    left: 60px;
  }
  @media only screen and (min-width: 1281px) {
    left: 460px;
    top: 20px;
  }
`;

export const MainTitle = styled.span`
  position: absolute;
  left: 20%;
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 2.5rem;
  margin-top: 4rem;
  width: 80%;

  @media only screen and (min-width: 768px) {
    width: 50%;
    bottom: 60px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
    width: 40%;
    margin-left: 75px;
  }

  @media only screen and (min-width: 1280px) {
    width: 35%;
    left: 175px;
    bottom: 200px;
    display: inline-block;
  }
  @media only screen and (min-width: 1281px) {
    width: 18%;
    left: 575px;
    bottom: 200px;
    display: inline-block;
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
  @media only screen and (min-width: 1024px) {
    height: 120vh;
  }
  @media only screen and (min-width: 1280px) {
    height: 100vh;
    width: 44vw;
  }
  @media only screen and (min-width: 1281px) {
    height: 100vh;
    width: 100%;
  }
`;
