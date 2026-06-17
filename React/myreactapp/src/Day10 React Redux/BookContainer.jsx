import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { purchase_book , sell_book } from './BookAction';
import bookReducer from './BookReducer';

export default function BookContainer() {
  const bookName = useSelector(state => state.bookName);
  const numOfBooks = useSelector(state => state.numOfBooks);
  const [noOfBooksSold, setNoOfBooksSold] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Book Container : {bookName}</h1>
      <p>Available Books: {numOfBooks}</p>
      <button onClick={() => dispatch(purchase_book())} style={{ marginBottom: '10px' }}>Buy Book</button>
      <br />
      <input type="number" 
      value={noOfBooksSold} 
      onChange={(e) => setNoOfBooksSold(Number(e.target.value))} />
      <br />
      <button onClick={() => { 
        dispatch(sell_book(noOfBooksSold || 0))
        setNoOfBooksSold("");
        }} style={{ margin: '10px' }}>Sell Book</button>
    </div>
  )
}
