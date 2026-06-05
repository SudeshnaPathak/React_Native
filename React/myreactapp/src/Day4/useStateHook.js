import React from 'react'

export default function useStateHook() {
  const [message, setMessage] = React.useState('');
  const[isCompAvailable, setIsCompAvailable] = React.useState(true);

  
  return (
    <div>
      <input type="text" 
      placeholder='Enter your name'
      value ={message}
      onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <button onClick={() => setIsCompAvailable(!isCompAvailable)}>
        {isCompAvailable ? 'Hide Component' : 'Show Component'}
      </button>
      {isCompAvailable && <p>This is a component that can be toggled.</p>}
    </div>
  )
}
