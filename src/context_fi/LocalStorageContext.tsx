import React, { createContext, useState, useEffect } from 'react';

// Define the context shape, including default types for TypeScript
interface LocalStorageContextType {
  data: any;
  setData: (data: any) => void;
}

// Create the context with a default value (null or a default object)
const LocalStorageContext = createContext<LocalStorageContextType | null>(null);

// Create the provider component
export const LocalStorageProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('myData');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (data !== null) {
      localStorage.setItem('myData', JSON.stringify(data));
    }
  }, [data]);

  return (
    <LocalStorageContext.Provider value={{ data, setData }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the LocalStorageContext
export const useLocalStorageContext = () => {
  const context = React.useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorageContext must be used within a LocalStorageProvider');
  }
  return context;
};
