import { styled } from "styled-components";
import LogoImg from "../../assets/rafa-gil-logo-white.png";

export const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme.secondary};
  /* margin-bottom: 10rem; */
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  padding: 0 0.5rem;
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 2rem 0;
  max-width: 50%;
  line-height: 1.5;
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  color: ${(props) => props.theme.secondary};
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const Logo = styled.div`
  background: url(${LogoImg}) no-repeat center;
  background-size: contain;
  width: 100px;
  aspect-ratio: 1;
`;

export const Background = styled.div`
  background: url(https://plus.unsplash.com/premium_photo-1661740258370-67d4a99c154d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 50vh;
`;