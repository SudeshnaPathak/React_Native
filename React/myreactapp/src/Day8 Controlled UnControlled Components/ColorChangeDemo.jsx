import React from 'react'

export default function ColorChangeDemo() {
  const color1 = React.useRef();
  const color2 = React.useRef();
  
  function handleSubmit(e) 
  {
    e.preventDefault();
    if(color1.current)
    {
        color2.current.style.backgroundColor = color1.current.value;
    }
  }
  return (
    <div>
      <form action="" method='post' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your color' id='color' ref={color1} />
        <br />
        <input type="text" placeholder='Background color' ref={color2} />
        <input type="submit" value="Change BGC" />
      </form>
    </div>
  )
}
