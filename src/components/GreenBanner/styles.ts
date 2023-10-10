import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 100%; */
  /* display: inline-block; */
  /* @media only screen and (min-width: 820px) {
    min-width: 100%;
    height: 100vh;
    padding-top: 1rem;
  } */
`;

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 1rem;
  /* height: 90vh; */
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 2rem;
`;

export const CTA = styled.div`
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  padding: 12px 24px;
  background-color: ${(props) => props.theme.tertiaryBg};
  border-radius: 99px;
  margin: 1.5rem 0;
  font-weight: bold;
  cursor: pointer;
`;

export const MainInfo = styled.div`
  font-size: 1.5rem;
  line-height: 1.25;
  font-family: "Bricolage Grotesque", sans-serif;
  text-align: center;
  margin: 1.5rem 0;
  font-weight: 400;
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  margin: 1.5rem 0;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;
`;
