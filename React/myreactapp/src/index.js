import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Day5 Routing Task1/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RescueList from './Day5 Routing Task1/RescueList';
import RescueDetails from './Day5 Routing Task1/RescueDetails';
import OverView from './Day5 Routing Task1/OverView';
import LocationHistory from './Day5 Routing Task1/LocationHistory';
import MedicalLog from './Day5 Routing Task1/MedicalLog';
import Login from './Day5 Routing Task1/Login';
import ControlRoomLayout from './Day5 Routing Task1/ControlRoomLayout';
import ActiveMissions from './Day5 Routing Task1/ActiveMissions';
import TeamStatus from './Day5 Routing Task1/TeamStatus';
import Reports from './Day5 Routing Task1/Reports';
import ProtectedRoute from './Day5 Routing Task1/ProtectedRoute';
// import ProductApp from './Day5 Axios Task1/ProductApp';
// import HomePage from './Day5 Routing/HomePage';
// import About from './Day5 Routing/About';
// import Contacts from './Day5 Routing/Contacts';
// import NotFound from './Day5 Routing/NotFound';
// import Dashboard from './Day5 Routing/Dashboard';
// import AdminDashboard from './Day5 Routing/AdminDashboard';
// import UserDashboard from './Day5 Routing/UserDashboard';
// import ProtectedRoute from './Day5 Routing/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {path: '/', element: <App />},
//   {path: '/products', element: <ProductApp />},
//   {path: '/home', element: <HomePage />},
//   {path: '/about', element: <About />},
//   {path: '/contacts', element: <Contacts />},
//   {
//     path: '/dashboard',
//     element: <Dashboard />,
//     children: [
//       {
//         path: 'admin',
//         element: <ProtectedRoute> <AdminDashboard /> </ProtectedRoute>
//       },
//       {
//         path: 'user',
//         element: <UserDashboard />
//       }
//   ]},
//   {path: '*', element: <NotFound />}
// ]);

const router = createBrowserRouter([
  {'path': '/', 'element': <App />},
  {'path': '/rescues','element': <RescueList />},
  {'path': '/rescues/:id', 
    'element': <RescueDetails />,
    children: [
      {'path': 'overview', 'element': <OverView />},
      {'path': 'medical', 'element': <MedicalLog />},
      {'path': 'location-history', 'element': <LocationHistory />} 
    ]
  },
  {'path': '/login', 'element': <Login />},
  {'path': '/control-room', 'element': <ProtectedRoute> <ControlRoomLayout /> </ProtectedRoute>,
    children: [
    {'path': 'active-missions', 'element': <ActiveMissions />},
    {'path': 'team-status', 'element': <TeamStatus />},
    {'path': 'reports', 'element': <Reports />}
  ]}
]);
  

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
