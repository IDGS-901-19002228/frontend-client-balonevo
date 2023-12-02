// 1. Importaciones
import { createContext, useContext, useState } from "react";

// 2. Crear el contexto
export const AuthContext = createContext()

// 3. Custom hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext)
}

// 4. Componente proveedor 
export const AuthProvider = ({ children }) => {

  // Estado global del usuario
  const [user, setUser] = useState(null)

  // Funciones para actualizar estado
  const login = () => {} 
  const logout = () => {}

  // Valor que se comparte en el contexto
  const value = {
    user,
    login,
    logout    
  }

  return <AuthContext.Provider value={value}>
    {children}  
  </AuthContext.Provider>
}