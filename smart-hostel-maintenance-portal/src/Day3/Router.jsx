import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DashboardPage from "./Pages/DashboardPage";
import CreateRequestPage from "./Pages/CreateRequestPage";
import LoginPage from "./Pages/LoginPage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import StudentDashboard from "./Components/StudentDashboard.jsx";
import RequestDetailsPage from "./Pages/RequestDetailsPage.jsx";
import RoleGuard from "./Components/RoleGuard.jsx";

export const router = createBrowserRouter(
    [
        {
          'path': '/',
          'element': <App />,
          'children': [
                        {
                          'element': <ProtectedRoute />,
                          'children': [
                            {'path': 'dashboard', 'element': <DashboardPage />},
                            {'path': 'admin-dashboard', 'element': <RoleGuard allowedRole='admin'><AdminDashboard /></RoleGuard>},
                            {'path': 'student-dashboard', 'element': <RoleGuard allowedRole='student'><StudentDashboard /></RoleGuard>},
                            {'path': 'create-request', 'element': <RoleGuard allowedRole='student'><CreateRequestPage /></RoleGuard>},
                            {'path': 'request/:id', 'element': <RequestDetailsPage />}
                          ]
                        },
                        {'path': 'login', 'element': <LoginPage />},
                      ]
        }
    ]
)
