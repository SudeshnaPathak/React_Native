import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DashboardPage from "./Pages/DashboardPage";
import CreateRequestPage from "./Pages/CreateRequestPage";

export const router = createBrowserRouter(
    [
        {
          'path': '/',
          'element': <App />,
          'children': [
                        {'path': 'dashboard', 'element': <DashboardPage />},
                        {'path': 'create-request', 'element': <CreateRequestPage />}
                      ]
        }
    ]
)
