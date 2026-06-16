import React from 'react'

export default function Searchbar({onSearch}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
   
