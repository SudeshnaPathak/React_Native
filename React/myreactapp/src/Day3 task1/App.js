import React from 'react'
import Child from './Child'

export default function App() {
  const [mount, setMount] = React.useState(true);
  const [theme, setTheme] = React.useState('light');
  const [showSeconds, setShowSeconds] = React.useState(false);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  return (
    <div>
      <button onClick={() => setMount(!mount)}>Mount/Unmount Clock</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <input type="checkbox" checked={showSeconds} onChange={() => setShowSeconds(!showSeconds)} /> Show Seconds
      {mount && <Child theme={theme} showSeconds={showSeconds} />}
    </div>
  )
}
