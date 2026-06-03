import React from 'react'

export default function ChildToParent({ sendDataToParent }) {
  const [data, setData] = React.useState('Child Says Hello!');

  function handleClick() {
    sendDataToParent(data);
  }

  return (
    <div>
      <p>This is Child data: {data}</p>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  )
}
