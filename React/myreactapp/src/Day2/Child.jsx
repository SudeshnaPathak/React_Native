import React from 'react'
import GrandChild from './GrandChild'

export default function Child({people}) {
  return (
    <div style={{backgroundColor:"lightgreen",border:"2px solid red",padding:"10px",margin:"10px"}}>
      <h1>I am Child Component</h1>
      <GrandChild people={people}/>
    </div>
  )
}
