import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
  #root {
    margin: 0 auto;
  }
`;
