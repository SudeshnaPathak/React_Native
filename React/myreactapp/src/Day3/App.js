import React from 'react'
import Counter from './Counter'

export default function App() {
  const [initialCount, setInitialCount] = React.useState(0);
  const[status , setStatus] = React.useState(true);

  
  return (
    <div style={{textAlign: 'center', backgroundColor: 'lightblue', padding: '20px', width: '400px', margin: '20px auto', borderRadius: '10px'}}>
      <p>Enter InitialValue: {initialCount}</p>
      <button onClick={() => setInitialCount(initialCount + 10)}>Increment by 10</button>
      {
        status ? <Counter initialCount={initialCount} /> : null
      }
      <button onClick={() => setStatus(!status)}>Mount/Unmount Component</button>
    </div>
  )
}
