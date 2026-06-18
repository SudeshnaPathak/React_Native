import React from 'react'

export default function LoginForm() {
  function HandleSubmit(e) {
    e.preventDefault();
    e.target.querySelector('button').disabled = true;
  }

  return (
    <form onSubmit={HandleSubmit}>
      <label htmlFor="username">Username :</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>
  )
}