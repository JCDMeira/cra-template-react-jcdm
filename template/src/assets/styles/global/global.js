import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    textarea:focus,
    input:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`;
