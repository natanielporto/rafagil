import styled from "styled-components";
import Photo from "../../assets/photo1.jpg";

export const ValueContainer = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  @media screen and (min-width: 992px) {
    max-height: 80vh;
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 5rem;
  @media (min-width: 280px) {
    padding: 4rem;
  }
`;

export const TopText = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  font-size: 1.25rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 400;

  @media screen and (min-width: 992px) {
    margin-bottom: 7rem;
  }
`;

export const BottomText = styled.div`
  font-family: "Staatliches", cursive;
  font-size: 1.75rem;
  line-height: 1.25;
  @media (min-width: 280px) {
    font-size: 1.25rem;
  }
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${Photo}) no-repeat top;
  background-size: cover;

  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: inherit;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
  overflow: hidden;
`;

export const Image = styled.div`
  margin-top: 0.5rem;
  background: url(${Photo}) no-repeat top;
  background-size: cover;
  height: 100vh;

  @media (min-width: 280px) {
    display: none;
  }
  @media (min-width: 360px) {
    display: inherit;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
