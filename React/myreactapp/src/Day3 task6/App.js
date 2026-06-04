import React from 'react'
import ToggleHook from './ToggleHook';

export default function App() {
    const {theme, toggleTheme} = ToggleHook();
  return (
    <div style={{backgroundColor: theme === "light" ? "lightgray" : "black", color: theme === "light" ? "black" : "white", padding: "20px", height: "100vh"}}>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>{theme === "light" ? "Set Dark Theme" : "Set Light Theme"}</button>
    </div>
  )
}
