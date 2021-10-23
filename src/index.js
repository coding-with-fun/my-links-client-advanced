import React from "react";
import ReactDOM from "react-dom";
import Base from "./Base";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthenticationProvider>
                <UserProvider>
                    <Base />
                </UserProvider>
            </AuthenticationProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
