import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }
`;
