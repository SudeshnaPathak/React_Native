import React from 'react'
import MainComponent from './MainComponent'
export default function Dashboard({theme, toggleTheme}) {
  return (
    <div style={{backgroundColor: 'pink', border: '1px solid black', padding: '50px'}}>
      <MainComponent theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}
