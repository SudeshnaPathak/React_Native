import React from 'react'
import useWindowSize from './useWindowSize';

export default function App() {
  const {color, currentWidth, height, deviceType} = useWindowSize();

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <div style={{
            backgroundColor: color,
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1>Window Size</h1>
            <p>Current width: {currentWidth}px</p>
            <p>Current height: {height}px</p>
            <p>Device Type: {deviceType}</p>
        </div>
    </div>
  )
}
