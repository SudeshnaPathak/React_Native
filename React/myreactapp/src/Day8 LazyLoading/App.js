import React from 'react'
import { Suspense, lazy } from 'react'

const Component1 = lazy(() => import('./MyComponent1'))
const Component2 = lazy(() => import('./MyComponent2'))

export default function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Component 1 is loading please wait ....</div>}>
        <Component1 />
      </Suspense>
        <Suspense fallback={<div>Component 2 is loading please wait ....</div>}>
            <Component2 />
        </Suspense>
    </div>
  )
}
