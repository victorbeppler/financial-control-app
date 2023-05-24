import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
