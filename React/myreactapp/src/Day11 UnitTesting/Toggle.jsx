import React, { useInsertionEffect } from 'react'

export default function Toggle() {
  const[isOn, setIsOn] = React.useState(false);
  return (
    <div>
      <p>{isOn ? 'The switch is ON' : 'The switch is OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? 'OFF' : 'ON'}</button>
    </div>
  )
}
