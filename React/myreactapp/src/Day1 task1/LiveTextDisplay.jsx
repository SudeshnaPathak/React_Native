// Text Display Component
// Problem Statement
// Create a React component called LiveTextDisplay.
// The component should contain:
// 1.one input box
// 2.one heading or paragraph below it
 
// Requirements
// When user types inside the input box, the same text should appear below
// If input is empty, show:
// You have not typed anything
 
// Example
// If user types:
// Hello React
// Then below it should show:
// You typed: Hello React

import { useState } from 'react';

export function DisplayLiveText()
{
    const [text, setText] = useState('');
    return (
        <div className="live-text-display">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text ? `You typed: ${text}` : 'You have not typed anything'}</p>
        </div>
    );
}