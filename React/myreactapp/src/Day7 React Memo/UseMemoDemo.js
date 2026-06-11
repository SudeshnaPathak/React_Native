import React from 'react'

export default function UseMemoDemo() {
  const [add, setAdd] = React.useState(0);
  const [minus, setMinus] = React.useState(100);


  const multiply = React.useMemo(() => {
    console.log("Multiplication function executed");
    return add * 10;
  },[add]); // useMemo will only re-run the function if the dependencies (in this case, add) have changed. If add has not changed, it will return the cached value of multiply.

  return (
    <div>
      <h1>UseMemoDemo</h1>
      <p>Addition: {add}</p>
      <p>Subtraction: {minus}</p>
      <button onClick={()=>setAdd(add => add+1)} style={{margin: '15px'}}>+</button>
      <button onClick={()=>setMinus(minus => minus-1)} style={{margin: '15px'}}>-</button>
      <p>Multiplication: {multiply}</p>
    </div>
  )
}
