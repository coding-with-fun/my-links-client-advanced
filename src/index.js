import React from "react";
import ReactDOM from "react-dom";
import Base from "./Base";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthenticationProvider>
                <Base />
            </AuthenticationProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
