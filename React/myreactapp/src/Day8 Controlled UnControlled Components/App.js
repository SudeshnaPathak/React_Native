import React from 'react'

export default function App() {
  const myInput = React.useRef(); 
  function handleSubmit(e) 
  {
    e.preventDefault();
    console.log(myInput.current.value);
  }
  return (
    <div>
      <form action="" method='post' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' id='name' ref={myInput} />
        <br />
        <input type="text" placeholder='Enter your email' id='email' ref={myInput} />
        <br />
        <input type="text" placeholder='Enter your password' id='password' ref={myInput} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
