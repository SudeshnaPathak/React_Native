import React from 'react'
import Counter from './Couter';

function HOC(props){
    return(
        <div style={{backgroundColor: props.color, padding: '20px', marginBottom: '10px'}}>
            <h1>HOC Component</h1>
            <props.cmp />
        </div>
    )
}

export default function App() {
  return (
    <div>
       <HOC cmp={Counter} color='red' />
       <HOC cmp={Counter} color='green' />
       <HOC cmp={Counter} color='blue' />
    </div>
  )
}
