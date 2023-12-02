// CarritoContext.js
import { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    // Puedes utilizar filter para eliminar el item del carrito
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    // Puedes utilizar setCart para reiniciar el carrito a un array vacío
    setCart([]);
  };

  return (
    <CarritoContext.Provider value={{ cart, addToCart, removeFromCart, clearCart  }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
