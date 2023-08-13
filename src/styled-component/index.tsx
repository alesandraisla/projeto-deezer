import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`
export const theme = {
  borderColor: "blue",
  color: "gray"
}

function AboutStyle() {
  return (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <h1>Titutlo</h1>
  </ThemeProvider>
  </>
  );
}

export default AboutStyle;
