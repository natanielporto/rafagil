import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media only screen and (min-width: 360px) {
    flex-direction: column-reverse;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;

  @media only screen and (min-width: 360px) {
    width: 100%;
    height: 300px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 820px) {
    margin-right: 2rem;
  }
`;

export const Logo = styled.img`
  margin-right: 10rem;
  @media only screen and (min-width: 360px) {
    transform: scale(0.5);
    position: absolute;
    top: -100px;
    left: 700px;
  }
  @media only screen and (min-width: 820px) {
    transform: scale(0.6);
    margin-right: 5rem;
    padding-right: 1rem;
  }
`;

export const MainTitle = styled.span`
  margin-right: 5rem;
  width: 60%;
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 3.5rem;
  @media only screen and (min-width: 360px) {
    position: absolute;
    left: 120px;
    width: 280%;
    font-size: 5.5rem;
  }
  @media only screen and (min-width: 820px) {
    margin-right: 0rem;
    width: 60%;
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 820px) {
    display: flex;
  }
`;

export const Image = styled.img`
  height: 100%;
  @media only screen and (min-width: 360px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 820px) {
    height: 100vh;
    width: 100%;
  }
`;
