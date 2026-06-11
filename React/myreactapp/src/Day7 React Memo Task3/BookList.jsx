import React from 'react'

function BookList({ books, someCallbackfunction }) {
  return (
    <div>
      {console.log("BookList component rendered")}
      <h2>Book List</h2>
      <ul style={{'listStyleType':'none'}}>
        {books.map((book , index) => (
            <li key={index}>
              {book}
              <br></br>
              <button onClick={() => someCallbackfunction(book)} style ={{marginBottom:'10px'}}>Mark as Favourite</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(BookList);
