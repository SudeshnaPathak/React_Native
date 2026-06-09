import { createBrowserRouter} from 'react-router-dom';
import App from './App';
import RescueList from './RescueList';
import RescueDetails from './RescueDetails';
import OverView from './OverView';
import LocationHistory from './LocationHistory';
import MedicalLog from './MedicalLog';
import Login from './Login';
import ControlRoomLayout from './ControlRoomLayout';
import ActiveMissions from './ActiveMissions';
import TeamStatus from './TeamStatus';
import Reports from './Reports';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';

export const router = createBrowserRouter([
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
  ]},
  {'path': '*', 'element': <NotFound />}
]);