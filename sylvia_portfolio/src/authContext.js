import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  console.log({ isAuthenticated, isAdminAuthenticated });
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isAdminAuthenticated, setIsAdminAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
