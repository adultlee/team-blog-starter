import { createGlobalStyle} from 'styled-components';
import reset from './reset';
import {
  lightThemeVariables,
  darkThemeVariables,
} from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #_next {
    width: 100%;
    min-height: 100vh;
    font-size: 90%;
  }

  html[data-theme='light'] {
    ${lightThemeVariables};
  }

  html[data-theme='dark'] {
    ${darkThemeVariables};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;