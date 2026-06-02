import { useState } from 'react';
export function Counter() {
  const [i, setI] = useState(0);
  return (
    <div className="counter">
      <button className="button increment-button" onClick={() => setI(i + 1)}>+</button>
      <p>{i}</p>
      <button className="button decrement-button" onClick={() => setI(i - 1)}>-</button>
    </div>
  );
}