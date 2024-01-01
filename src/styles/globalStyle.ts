import * as styled from 'styled-components';

import { reset } from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
    font: inherit;
    background: none;
    border: none;
  }

  select {
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`;

export default GlobalStyle;
