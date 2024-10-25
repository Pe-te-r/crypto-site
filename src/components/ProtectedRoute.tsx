// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { useLocalStorageContext } from '../context_fi/LocalStorageContext';

// Define the AuthContext type
interface AuthContextType {
  user: { role: string | undefined };
  logoutUserNow: () => void;
}

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: storageData, removeData } = useLocalStorageContext();

  // Define user role from storageData
  const role = storageData ? storageData.logged : undefined;
  console.log(storageData)
  const [user, setUser] = useState({ role }); // Define user state

  // Function to logout and clear user data
  const logoutUserNow = () => {
    removeData();
    setUser({ role: undefined }); // Clear user data upon logout
  };

  return (
    <AuthContext.Provider value={{ user, logoutUserNow }}>
      {children}
    </AuthContext.Provider>
  );
};
