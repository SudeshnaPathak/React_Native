import { useState } from 'react';
export function FontSizeController() 
{
    const[fontSize, setFontSize] = useState(16);
    return(
        <div>
            <p style={{fontSize: `${fontSize}px`}}>This is some text with dynamic font size.</p>
            <button onClick={() => setFontSize(fontSize + 1)}>Increase Font Size</button>
            <button onClick={() => setFontSize(fontSize - 1)}>Decrease Font Size</button>
        </div>
    )
}