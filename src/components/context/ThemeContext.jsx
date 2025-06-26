import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
        document.body.classList.toggle('dark-mode', !darkTheme);
        document.body.classList.toggle('light-mode', darkTheme);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easier use
export const useTheme = () => useContext(ThemeContext);
