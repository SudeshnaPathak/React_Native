import React from 'react'
import DummyChild from './DummyChild';

export default function UseCallbackDemo() {
  const [add, setAdd] = React.useState(0);
  const [count, setCount] = React.useState(100);

  const somefunctionCallback = React.useCallback(() => 
    {
        console.log("Some function executed");
    }, [add]); // useCallback will only re-create the function if the dependencies (in this case, add) have changed. If add has not changed, it will return the cached version of somefunctionCallback.

  return (
    <div>
      <h1>UseCallbackDemo</h1>
      <DummyChild somefunction={somefunctionCallback} add={add} />
      <p>Add: {add}</p>
      <p>Count: {count}</p>
      <button onClick={()=>setAdd(add => add+1)} style={{margin: '15px'}}>Add</button>
      <button onClick={()=>setCount(count => count+1)} style={{margin: '15px'}}>Count</button>
    </div>
  )
}
