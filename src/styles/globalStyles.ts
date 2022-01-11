import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body {
  font-family: 'Montserrat';
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.black};
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}

a {
  color: ${({theme}) => theme.colors.white};
}
`

export default GlobalStyle