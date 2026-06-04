import React from 'react'

export default function FunctionalComponentLifecycleDemo() {
    const[count, setCount] = React.useState(0);
    const[title, setTitle] = React.useState("Functional Component Lifecycle Demo");

    //Any change in state or props will trigger useEffect. Hence, it is equivalent to componentDidMount and componentDidUpdate lifecycle methods of class components.
    React.useEffect(() => {
       console.log("Call API or perform any side effect here. Called only once when component mounts");
    }, []);
    //Empty dependency array ensures that useEffect is called only once when the component mounts. Hence, it is equivalent to componentDidMount lifecycle method of class components.


    React.useEffect(() => {
       console.log("Called Always when state or props change");
    });
    //No dependency array means that useEffect will be called on every render, which includes the initial render and every update. Hence, it is equivalent to both componentDidMount and componentDidUpdate lifecycle methods of class components.

     React.useEffect(() => {
       console.log("Use Effect called when count changes");
    }, [count]);

        React.useEffect(() => {
         console.log("Use Effect called when title changes");
    }, [title]);
     //Dependency array with specific state variables means that useEffect will be called only when those specific state variables change. Hence, it is equivalent to componentDidUpdate lifecycle method of class components for those specific state variables.
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Title: {title}</p>
            <button onClick={() => setTitle("New" + title)}>Update Title</button>
        </div>
    )
}
