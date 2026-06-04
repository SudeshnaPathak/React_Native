import React from 'react'

export default function ToggleHook() {
  const[theme,setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return {theme,toggleTheme};
}
