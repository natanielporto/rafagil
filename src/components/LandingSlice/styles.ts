import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media only screen and (min-width: 821px) {
    display: flex;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (min-width: 821px) {
    /* For everything bigger than 820px */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2rem;
  }
`;

export const Logo = styled.img`
  @media only screen and (min-width: 821px) {
    transform: scale(0.6);
    margin-right: 5rem;
    padding-right: 1rem;
  }
`;

export const MainTitle = styled.span`
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 3.5rem;
  width: 70%;
  @media only screen and (min-width: 821px) {
    color: ${(props) => props.theme.secondary};
    font-family: "Staatliches";
    font-size: 3.5rem;
    width: 70%;
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 821px) {
    display: flex;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  @media only screen and (min-width: 821px) {
    height: 100vh;
    width: 100%;
  }
`;
