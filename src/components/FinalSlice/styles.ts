import { styled } from "styled-components";

export const FinalContainer = styled.div`
  @media only screen and (min-width: 320px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    height: 0;
  }
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme.secondary};
  margin-bottom: 10rem;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;

export const ImageContainer = styled.div`
  margin-top: 2.5rem;
`;

export const Image = styled.img`
  height: 300px;
  width: 1280px;
  object-fit: cover;
`;

export const Title = styled.div`
  @media only screen and (min-width: 320px) {
    font-family: "Staatliches", cursive;
    text-transform: capitalize;
    font-size: 4rem;
    margin-bottom: 2rem;
    margin-top: 3rem;
    width: 50%;
    padding-left: 10rem;
  }
  @media only screen and (min-width: 415px) {
    padding-left: 0rem;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 5rem;
  }
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.secondary};
  display: flex;
  font-size: 2.5rem;
  flex-direction: column;
  text-align: end;
`;

export const Social = styled.div`
  @media only screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.25rem;
    padding-inline: 10rem;
  }
  @media only screen and (min-width: 768px) {
    padding-inline: 5rem;
  }
`;
export const Logo = styled.img`
  transform: scale(0.3);
  margin-left: -12.5rem;
  padding-bottom: 12.5rem;
`;
