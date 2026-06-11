import React from 'react'
import Child from './Child';

export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [localVar, setLocalVar] = React.useState(0);
  return (
    <div>
      <Child count={count}/>
      <button onClick={()=>setCount(count => count+1)}>Increment</button>
      <p>Local Variable: {localVar}</p>
      <button onClick={()=>setLocalVar(localVar => localVar+1)}>Increment Local Var</button>
    </div>
  )
}
