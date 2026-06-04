import React from 'react'

export default function CustomHookDemo() {
    const[count,setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
   return {count,increment,decrement};
}
