// // src/components/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context_fi/AuthContext';

// const ProtectedRoute = ({ element, roles }) => {
//   const { user } = useAuth();

//   // Check if user is authenticated and has the required role
//   const isAuthenticated = user !== null;
//   const hasRequiredRole = roles ? roles.includes(user.role) : true;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (!hasRequiredRole) {
//     return <Navigate to="/" />; // Redirect to home if user does not have access
//   }

//   return element; // Render the protected component
// };

// export default ProtectedRoute;
