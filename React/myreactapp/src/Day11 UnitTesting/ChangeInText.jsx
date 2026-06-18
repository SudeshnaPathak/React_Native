import React from 'react'

export default function ChangeInText() {
    const [name, setName] = React.useState('');
    const [status, setStatus] = React.useState(false);
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={status}
        onChange={(e) => setStatus(e.target.checked)}
      />
      <p>{status ? 'Checkbox is checked' : 'Checkbox is unchecked'}</p>
    </div>
  )
}
