import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column-reverse;
  position: relative;
  display: flex;
  @media only screen and (min-width: 820px) {
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 300px;

  @media only screen and (min-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    margin-right: 2rem;
  }
`;

export const Logo = styled.img`
  transform: scale(0.5);
  position: absolute;
  top: -100px;
  left: 700px;

  @media only screen and (min-width: 820px) {
    transform: scale(0.6);
    margin-right: 10rem;
    margin-right: 5rem;
    padding-right: 1rem;
  }
`;

export const MainTitle = styled.span`
  position: absolute;
  left: 120px;
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 5.5rem;
  margin-top: 5rem;

  @media only screen and (min-width: 820px) {
    margin-right: 5rem;
    width: 60%;
    font-size: 3.5rem;
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
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 820px) {
    height: 100vh;
    width: 100%;
  }
`;
