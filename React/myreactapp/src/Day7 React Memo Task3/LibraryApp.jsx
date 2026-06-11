import React from 'react'
import BookList from './BookList';

export default function LibraryApp() {
  const [books, setBooks] = React.useState([
    'React Basics', 'JavaScript Essentials', 'Node.js Intro'
  ]);

  const [favouriteBooks, setFavouriteBooks] = React.useState([]);

  const [titleColor, setTitleColor] = React.useState('blue');

  function toggleTitleColor() {
    setTitleColor(prevColor => prevColor === 'blue' ? 'green' : 'blue');
  }

  const markAsFavourite = React.useCallback((book) => {
    setFavouriteBooks(prevFavourites => prevFavourites.includes(book) ? prevFavourites : [...prevFavourites, book]);
  }, []);

  // const markAsFavourite = React.useCallback((book) => {
  //   setFavouriteBooks(prevFavourites => 
  //     {
  //     if (!prevFavourites.includes(book)) 
  //       {
  //         return [...prevFavourites, book];
  //       }
  //     return prevFavourites;
  //   });
  // }, []);

  return (
    <div>
      <h1 style={{ color: titleColor }}>Library App</h1>
      <BookList books={books} someCallbackfunction={markAsFavourite} />
      <button onClick={toggleTitleColor}>Change Title Color</button>
      <div>
        <h2>Favourite Books</h2>
        <ul>
          {favouriteBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
