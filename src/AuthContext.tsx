// ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/ProtectedRoute';
import { useLocalStorageContext } from './context_fi/LocalStorageContext';

interface ProtectedRouteProps {
  element: React.ElementType; // Component to render
  role: string; // Role required to access this route
  [key: string]: any; // Allow any other props
}

const ProtectedRoute = ({ element: Component, role, ...rest }: ProtectedRouteProps) => {
  const { user } = useAuth(); // Access user from context
  // const { data: storageData } = useLocalStorageContext(); 
 

  console.log(user)
   // Check if the user is logged in
  if (!user.role) {
    return <Navigate to="/" />;
  }

  let to;
  useEffect(()=>{
    if(user){

      
      // Determine where to redirect based on role
      if (user.role === 'admin') {
        to = '/admin';
      } else if (user.role !== role) {
        to = '/';
      }
    }
  },[role])


  // If the user's role matches the required role, render the component
  if (user.role === role) {
    return <Component {...rest} />;
  } else {
    return <Navigate to={to} />;
  }
};

export default ProtectedRoute;

