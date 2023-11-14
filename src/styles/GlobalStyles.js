import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0 0 auto;
  padding: 0;
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
