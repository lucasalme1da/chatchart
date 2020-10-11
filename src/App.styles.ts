import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Baloo 2', cursive;
    background: #FDC830;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFA552, #FF8C42);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFA552, #FF8C42); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    box-sizing: border-box;

  }

`;
