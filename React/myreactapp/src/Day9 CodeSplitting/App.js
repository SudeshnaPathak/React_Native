import React from 'react'
import { Suspense , lazy} from 'react'
import Loading from './Loading'

export default function App() {
  const [showAdmin, setShowAdmin] = React.useState(false)
  const AdminDashboardLazy = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./AdminDashboard'))
    }, 5000)
  })
})
  return (
    <div>
        <button onClick={() => setShowAdmin(prev => !prev)} className='btn btn-primary'>Toggle Admin Dashboard</button>
        {showAdmin &&
        <Suspense fallback=<Loading />>
          <AdminDashboardLazy />
        </Suspense>}
    </div>
  )
}
