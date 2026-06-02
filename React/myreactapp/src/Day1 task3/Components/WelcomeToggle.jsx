import { useState } from "react";
export function WelcomeToggle({welcome, setWelcome})
{
    const[toggled, setToggled] = useState(false);
    return (
        <div className="welcome-toggle">
            <button className="toggle-button" onClick={() => setWelcome(!welcome)}>
                Toggle Button
            </button>
        </div>
    );
}