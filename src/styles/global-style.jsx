import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
//como remover a scroll bar da pagina
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyle;
