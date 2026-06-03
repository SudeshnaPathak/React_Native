import React from 'react'
import Dashboard from './Dashboard'
import { ThemeContextProvider } from './ThemeContext';

export default function App() {
  
  return (
    <ThemeContextProvider>
      <div style={{backgroundColor:'lightgray', minHeight:'100vh', padding:'20px', border: '1px solid black'}}>
        <Dashboard />
      </div>
    </ThemeContextProvider>
  )
}
