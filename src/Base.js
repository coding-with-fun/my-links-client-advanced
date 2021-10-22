import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import App from "./App";

const Base = () => {
    const [theme, setTheme] = useState("dark");

    const themeToApply = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <ThemeProvider theme={themeToApply}>
            <Paper square elevation={0} className="app_outer__container">
                <App />
            </Paper>
        </ThemeProvider>
    );
};

export default Base;
