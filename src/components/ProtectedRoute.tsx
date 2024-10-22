// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext<any>(null);

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null); // Define user state

  const loginUserNow = (userData: any) => {
    setUser(userData); // Set user data upon login
  };

  const logoutUserNow = () => {
    setUser(null); // Clear user data upon logout
  };

  return (
    <AuthContext.Provider value={{ user, loginUserNow, logoutUserNow }}>
      {children}
    </AuthContext.Provider>
  );
};
