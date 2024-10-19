// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create AuthContext
// const AuthContext = createContext();

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // AuthProvider component to wrap your app
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // User will hold user info including role

//   const login = (userData) => {
//     setUser(userData); // Set user data on login
//   };

//   const logout = () => {
//     setUser(null); // Clear user data on logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
