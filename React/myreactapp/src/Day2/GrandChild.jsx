import React from 'react'

//Prop Drilling is the process of passing data from a parent component to a child component through props, and then from that child component to its own child component, and so on, until the data reaches the desired component. This can lead to a situation where intermediate components that do not need the data are forced to pass it down, creating unnecessary complexity and making the code harder to maintain.
export default function GrandChild({people}) {
  return (
    <div style={{backgroundColor:"lightblue",border:"2px solid red",padding:"10px",margin:"10px"}}>
      <h1>I am GrandChild Component</h1>
      {
        people && people.map((p, index)=>{
          return <h3 key={index}>{p.name} is {p.age} years old.</h3>
        })
    }
    </div>
  )
}
