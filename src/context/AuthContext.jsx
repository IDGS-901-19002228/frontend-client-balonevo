// AuthContext.js
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  logged: false,
  // otros datos relacionados con el usuario
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, logged: true };
    case 'LOGOUT':
      return { ...state, logged: false };
    // manejar otras acciones según sea necesario
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
