import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useContext } from "react";
import App from "./App";
import { ThemeContext } from "./context/ThemeContext";

const Base = () => {
    const { theme } = useContext(ThemeContext);

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
