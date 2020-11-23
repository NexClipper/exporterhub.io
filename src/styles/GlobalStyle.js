import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
    text-decoration: none;
    box-sizing: border-box;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }
`;
