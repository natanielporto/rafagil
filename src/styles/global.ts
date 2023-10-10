import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  };

  body {
    background-color: #00092e;
    color: #00092e;
    margin: auto;
    height: 100vh;
    width: 100%;
    max-width: 1260px;
    padding: 0 1rem;
  };
`;
