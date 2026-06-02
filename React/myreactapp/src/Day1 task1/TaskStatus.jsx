import { useState } from 'react';
export function TaskStatus() 
{
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                Complete React practice
            </label>
            <p>{isChecked ? 'Task completed!' : 'Task not completed yet.'}</p>
        </div>
    );
}