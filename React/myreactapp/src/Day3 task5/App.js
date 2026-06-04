import React from 'react'
import CustomHookDemo from './CustomHookDemo';

export default function App() {

    const {count,increment,decrement} = CustomHookDemo();
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    )
}
