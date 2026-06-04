import React from 'react'
import Child from './Child';

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

    function minorETAUpdate() {
        setCustomer(prev => ({ ...prev, ETA: prev.ETA - 1 }));
    }

    function majorETAUpdate() {
        setCustomer(prev => ({ ...prev, ETA: prev.ETA - 5 }));
    }
    
    function updateStatus() {
        setCustomer(prev => ({ ...prev, status: "Out for Delivery" }));
    }

    function updatePriority() {
        setCustomer(prev => ({ ...prev, Priority: "High" }));
    }
  
  return (
    <div>
      <button onClick={() => setStartTracking(!startTracking)}>Start/Stop Tracking</button>
      <button onClick={minorETAUpdate}>Minor ETA Update</button>
      <button onClick={majorETAUpdate}>Major ETA Update</button>
      <button onClick={updateStatus}>Update Status</button>
      <button onClick={updatePriority}>Update Priority</button>
       {startTracking && <Child customer={customer} />}
    </div>
  )
}
