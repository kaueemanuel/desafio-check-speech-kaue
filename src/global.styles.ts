import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary-accent: #112D4E;
  --color-primary: #3F72AF;
  --color-background: #ffffff;
  --color-background-secondary: #DBE2EF;
  --font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  --box-shadow-default: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
}

body {
  margin: 0;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background);
  color: var(--color-primary);
}

.containerWrapper {
  max-width: 1170px;
}

`;

export default GlobalStyle;
