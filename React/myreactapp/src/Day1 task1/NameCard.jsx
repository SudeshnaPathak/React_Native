// Simple Name Card Component

// Problem Statement

// Create a React component called NameCard.

// The component should contain:

// one input field for entering a name

// one button called Update Name

// one text area/card to display the name
 
// Requirements

// Initial displayed name should be:

// Guest

// User types a name in input field

// When user clicks Update Name, the displayed name should change
 
// Example

// Initially:

// Hello, Guest

// If user enters Ravi and clicks button:

// Hello, Ravi

import { useState } from 'react';
export function NameCard() 
{
    const[name, setName] = useState("Guest");
    const[inputName, setInputName] = useState("Guest");
    return(
        <div className="name-card">
            <h2>{`Hello ${name}`}</h2>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <button onClick={() => setName(inputName)}>Update Name</button>
        </div>
    );
}