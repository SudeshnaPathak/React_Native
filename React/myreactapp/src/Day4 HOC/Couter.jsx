import React from 'react'

export default function Couter() {
  const [count, setCount] = React.useState(0);
      return(
          <div>
              <h1>Counter: {count}</h1>
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
      )
}
