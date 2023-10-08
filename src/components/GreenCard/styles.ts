import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: calc(40% - 0.5rem);
  height: 100vh;
`;

export const CardContainer = styled.ul`
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 0 5rem;
  height: calc(90vh);
  margin-top: 2.5rem;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
