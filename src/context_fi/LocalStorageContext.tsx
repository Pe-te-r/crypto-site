import React, { createContext, useState, useEffect } from 'react';

// Define the context shape, including default types for TypeScript
interface LocalStorageContextType {
  data: any;
  setData: (data: any) => void;
  removeData: () => void;
}

// Create the context with a default value (null or a default object)
const LocalStorageContext = createContext<LocalStorageContextType | null>(null);

// Create the provider component
export const LocalStorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('myData');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (data !== null) {
      localStorage.setItem('myData', JSON.stringify(data));
    }
  }, [data]);

  // Function to remove data from local storage and reset state
  const removeData = () => {
    localStorage.removeItem('myData');
    setData('');
  };

  return (
    <LocalStorageContext.Provider value={{ data, setData, removeData }}>
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
