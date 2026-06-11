import React from 'react'

function DummyChild({ somefunction , add}) {
  return (
    <div>
      {console.log("DummyChild component rendered")}
    </div>
  )
}

export default React.memo(DummyChild); 
