import { useState } from "react";
export function NameInput({name, setName})
{
    return (
        <div className="name-input">
            <label htmlFor="name"><strong>Name:</strong> </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ 
                        borderColor: name.trim() ? "#28a745" : "#dc3545",      
                        backgroundColor: name.trim() ? "#e8f5e9" : "#ffebee",  
                    }}
            />
        </div>
    );
}