import { styled } from "styled-components";

export const WorldContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  margin-top: 2.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
  padding-top: 2rem;
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;
  padding: 2rem 0;
`;

export const Background = styled.div`
  background: url(https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 50vh;
`;
