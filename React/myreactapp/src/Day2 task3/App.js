import React from 'react'
import Dashboard from './Dashboard'

export default function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div style={{backgroundColor:'lightgray', minHeight:'100vh', padding:'20px', border: '1px solid black'}}>
      <Dashboard theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}
