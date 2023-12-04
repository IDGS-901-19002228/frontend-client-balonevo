// AuthContext.js

import { createContext, useState } from "react";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    usuario: null
  });

  const setUserData = (userData) => {
    setAuthState({  
       isAuthenticated: true,
       usuario: userData
    });
  }

  const logout = () => {
    setAuthState({
       isAuthenticated: false,
       usuario: null     
    });
  }

  return (
    <AuthContext.Provider value={{ authState, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};