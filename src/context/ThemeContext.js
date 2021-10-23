import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem("my-links-theme");
    const [theme, setTheme] = useState(storedTheme || "light");

    const toggleTheme = () => {
        const themeToSet = theme === "light" ? "dark" : "light";
        setTheme(themeToSet);
        localStorage.setItem("my-links-theme", themeToSet);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,

                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
