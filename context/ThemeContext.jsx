import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('isDarkTheme')));
    return (
        <ThemeContext.Provider value={[isDark, setDark]}>
            {children}
        </ThemeContext.Provider>
    )
}