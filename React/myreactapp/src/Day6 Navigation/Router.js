import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/", element: <App />
    },
    {
        path: "/login", element: <Login />
    },
    {
        path: "/dashboard", element: <Dashboard />
    }
])