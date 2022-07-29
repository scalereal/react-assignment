import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import appTheme from "@theme";
import { GlobalCss } from "@components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <GlobalCss />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
