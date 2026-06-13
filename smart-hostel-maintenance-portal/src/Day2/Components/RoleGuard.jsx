import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function RoleGuard({ allowedRole, children }) {
  const { user } = useAuth();
  return user?.role === allowedRole ? children : <Navigate to="/" replace />;
}
