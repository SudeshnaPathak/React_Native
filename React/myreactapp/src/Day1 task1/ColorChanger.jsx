// Background Color Changer
// Problem Statement
// Create a React component called ColorChanger.
// The component should display:
// a box or container
// three buttons:
// Red
// Green
// Blue
// Requirements:
// When user clicks Red, box background should become red
// When user clicks Green, box background should become green
// When user clicks Blue, box background should become blue


import { useState } from "react";
export function ColorChanger() {

    const [color, setColor] = useState('black');

    return (
        <div>
            <span style={{ 
                backgroundColor: color, 
                width: '20px', 
                height: '20px', 
                display: 'inline-block'
            }}></span>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('blue')}>Blue</button>
         </div>
    )

}