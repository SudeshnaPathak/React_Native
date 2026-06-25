import { AppContext } from "./AppContext";
import React from "react";

const initialProfile = {
    id: "r1",
    name: "Aarav Sharma",
    flatNo: "B-504",
    phone: "9876543210",
    email: "aarav@email.com"
  };

const initialRequests = [
  {
    id: "req1",
    title: "Water leakage in kitchen",
    category: "Maintenance",
    status: "Pending",
    priority: "High",
    residentId: "r1",
    createdAt: "2026-06-25"
  }
];

const initialAnnouncements = [
  {
    id: "a1",
    title: "Water supply interruption",
    type: "Notice",
    date: "2026-06-26"
  }
];

const initialEvents = [
  {
    id: "e1",
    name: "Yoga Session",
    date: "2026-06-28",
    venue: "Club House"
  }
];

export function AppProvider({ children }) {
    const [user, setUser] = React.useState(initialProfile);
    const [requests, setRequests] = React.useState(initialRequests);
    const [announcements, setAnnouncements] = React.useState(initialAnnouncements);
    const [events, setEvents] = React.useState(initialEvents);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    const updateProfile = (updatedProfile) => {
        setUser(user => ({...user, ...updatedProfile}))
    }

    const addRequest = (newRequest) => {
        const wrappedRequest = {
            ...newRequest,
            id: `req${requests.length + 1}`,
            residentId: user.id,
            createdAt: new Date().toISOString().split('T')[0],
            status: "Pending",
            priority: "Medium"
        };
        setRequests(requests => [...requests, wrappedRequest]);
    }

    return(
        <AppContext.Provider value={{
            user,
            requests,
            announcements,
            events,
            isAuthenticated,
            login,
            logout,
            updateProfile,
            addRequest
        }}>
            {children}
        </AppContext.Provider>
    )
        
}



