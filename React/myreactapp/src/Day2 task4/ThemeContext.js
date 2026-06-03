import React from 'react'
export const ThemeContext = React.createContext();
export const useThemeContext = () => React.useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}