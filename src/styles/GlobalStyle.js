import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');

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
