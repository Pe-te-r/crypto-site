// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/ProtectedRoute';

interface ProtectedRouteProps {
  element: React.ElementType; // Component to render
  role: string; // Role required to access this route
  [key: string]: any; // Allow any other props
}

const ProtectedRoute = ({ element: Component, role, ...rest }: ProtectedRouteProps) => {
  const { user } = useAuth(); // Access user from context

  // Check if the user is logged in
  if (!user) {
    return <Navigate to="/" />;
  }

  // Determine where to redirect based on role
  let to;
  if (user.role === 'admin') {
    to = '/admin';
  } else if (user.role !== role) {
    to = '/';
  }

  // If the user's role matches the required role, render the component
  if (user.role === role) {
    return <Component {...rest} />;
  } else {
    return <Navigate to={to} />;
  }
};

export default ProtectedRoute;
