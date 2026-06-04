import React from 'react'

export default function Child({customer}) 
{
  const prevCustomer = React.useRef(customer);
  React.useEffect(() => {
    if (prevCustomer.current !== customer) {
      if(
        (Math.abs(prevCustomer.current.ETA - customer.ETA) >= 5)
        || (prevCustomer.current.Priority !== customer.Priority) 
        || (prevCustomer.current.status !== customer.status)) 
        { 
          console.log("Customer data has changed:", customer);
          prevCustomer.current = customer;
        }
    }
  }, [customer]);

  const { orderId, name, status, ETA, Priority } = prevCustomer.current;
  return (
    <div>
      <h2>Order ID: {orderId}</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
      <p>ETA: {ETA} mins</p>
      <p>Priority: {Priority}</p>
    </div>
  )
}
