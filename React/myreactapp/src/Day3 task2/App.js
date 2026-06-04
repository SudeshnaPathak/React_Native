import React from 'react'
import Child from './Child'

export default function App() {
    const[startTracking, setStartTracking] = React.useState(false);
    const [customer, setCustomer] = React.useState(
    {
        orderId: "FD1024",
        name: "Ananya",
        status: "preparing",
        ETA: 30,
        Priority: "Normal"
    });

  return (
    <div>
      <button onClick={() => setStartTracking(!startTracking)}>Start/Stop Tracking</button>
      <button onClick={() => setCustomer(prev => ({ ...prev, ETA: prev.ETA - 1 }))}>Minor ETA Update</button>
      <button onClick={() => setCustomer(prev => ({ ...prev, ETA: prev.ETA - 5 }))}>Major ETA Update</button>
      <button onClick={() => setCustomer(prev => ({ ...prev, status: "Out for Delivery" }))}>Update Status</button>
      <button onClick={() => setCustomer(prev => ({ ...prev, Priority: "High" }))}>Update Priority</button>
      {startTracking && <Child customer={customer} />}
    </div>
  )
}
