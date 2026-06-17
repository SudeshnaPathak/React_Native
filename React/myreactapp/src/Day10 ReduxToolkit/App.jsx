import React from 'react'
import { Provider } from 'react-redux'
import BookStore from './BookStore'
import BookContainer from './BookContainer'

export default function App() {
  return (
    <Provider store={BookStore}>
      <div>
      <BookContainer />
      </div>
    </Provider>
  )
}
