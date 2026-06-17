import React from 'react'
import BookContainer from './BookContainer'
import Store from './Store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <div>
        <BookContainer />
      </div>
    </Provider>
  )
}
