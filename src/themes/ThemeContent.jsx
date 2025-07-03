import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (prevTheme) => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(`Theme changed to: ${theme === "light" ? "dark" : "light"}`);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);