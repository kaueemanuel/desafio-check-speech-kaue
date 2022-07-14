import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary-accent: #112D4E;
  --color-primary: #111111;
  --color-background: #ffffff;
  --color-background-secondary: #f2f2f2;
  --font-family: Oswald, sans-serif;
  --box-shadow-default: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background);
  color: var(--color-primary);
}

section {
  width: 100%;
  padding: 40px 0px;
}

.containerWrapper {
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 12px;
  padding-right: 12px;
}

`;

export default GlobalStyle;
