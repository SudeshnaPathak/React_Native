import React from 'react'
import { useThemeContext } from './ThemeContext';


export default function MainComponent() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div style={{backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px'}}>
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
