import React from 'react'
import ChildToParent from './ChildToParent';

export default function App() {
   const [childData, setChildData] = React.useState('');

  function handleChildData(data) {
    setChildData(data);
  }
  return (
    <div>
      <ChildToParent sendDataToParent={handleChildData} />
      <p>Data from child: {childData}</p>
    </div>
  )
}
