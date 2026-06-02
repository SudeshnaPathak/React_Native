import { useState } from 'react';
export function GreetingCard(){
    const [greetingMessage, setGreetingMessage] = useState('Good');
    return(
        <div className="greeting-card">
            <h1>{greetingMessage}</h1>
            <button className="button morning-button" onClick={() => setGreetingMessage("Good Morning")}>Morning</button>
            <button className="button afternoon-button" onClick={() => setGreetingMessage("Good Afternoon")}>Afternoon</button>
            <button className="button evening-button" onClick={() => setGreetingMessage("Good Evening")}>Evening</button>
        </div>
    );
}