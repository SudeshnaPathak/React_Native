// The component should display:

// 1.one button

// 2.a message text

// Initially, the message should be hidden.

// Requirements:

// When user clicks the button, the message should appear

// When user clicks again, the message should disappear

// Button text can be:

// Show Message

// Hide Message
 
import { useState } from 'react';

export function MessageToggle() {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div className="message-toggle">
            <button className="button toggle-button" onClick={() => setShowMessage(!showMessage)}>
                {showMessage ? 'Hide Message' : 'Show Message'}
            </button>
            {showMessage && <p>This is the message text.</p>}
        </div>
    );

}