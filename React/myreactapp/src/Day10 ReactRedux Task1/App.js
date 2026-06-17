import React from 'react'
import TodoContainer from './TodoContainer'
import Store from './Store';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={Store}>
      <div>
        <TodoContainer />
      </div>
    </Provider>
  )
}
