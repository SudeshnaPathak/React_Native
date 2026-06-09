import ProductApp from '../Day5 Axios Task1/ProductApp';
import HomePage from './HomePage';
import About from './About';
import Contacts from './Contacts';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import ProtectedRoute from './ProtectedRoute';
import App from './App';
import { createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/products', element: <ProductApp />},
  {path: '/home', element: <HomePage />},
  {path: '/about', element: <About />},
  {path: '/contacts', element: <Contacts />},
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'admin',
        element: <ProtectedRoute> <AdminDashboard /> </ProtectedRoute>
      },
      {
        path: 'user',
        element: <UserDashboard />
      }
  ]},
  {path: '*', element: <NotFound />}
]);
