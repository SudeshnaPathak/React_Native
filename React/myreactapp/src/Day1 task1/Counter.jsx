import { useState } from 'react';
export function Counter(props) {
  const [i, setI] = useState(0);
  return (
    <div className="counter">
      <button className="button increment-button" onClick={() => setI(i + 1)}>+</button>
      <p>{i}</p>
      <p>{props.i}</p>
      <button className="button decrement-button" onClick={() => setI(i - 1)}>-</button>
    </div>
  );
}