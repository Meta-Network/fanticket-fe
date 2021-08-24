import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

a {
  text-decoration: inherit;
}

ol, ul {
  list-style: none;
}
`
