import React from 'react'

function Child({count}) {
    
  console.log("Child component rendered");
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default React.memo(Child); // React.memo is a higher order component that will prevent the child component from re-rendering if the props have not changed.
