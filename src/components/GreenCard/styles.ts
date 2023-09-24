import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: calc(20% - 0.5rem);
  height: 100vh;
`;

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 5rem;
  height: calc(90vh);
  margin-top: 2.5rem;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 2rem;
`;
