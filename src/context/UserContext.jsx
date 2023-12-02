// UserContext.js
import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  id: null,
  nombre: "",
  rol: {},
  permissions: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.payload };
    // Puedes manejar otras acciones según sea necesario
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ userData: state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
