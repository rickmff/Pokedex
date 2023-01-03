import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    cursor: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: 'Neue Montreal';
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    cursor: none;
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
export default GlobalStyle;