// CarritoContext.js
import { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  //   if(existingItemIndex !==-1){
  //     const updatedCart = [...cart];
  //     updatedCart[existingItemIndex].cantidad +=1;
  //     setCart(updatedCart);
  //   } else {
  //     setCart((prevCart) => [...prevCart, { ...item, cantidad: 1 }]);
  //   }
  // };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const newQuantity = updatedCart[existingItemIndex].cantidad + 1;
  
      // Check if the new quantity exceeds the available stock
      if (newQuantity <= item.stock) {
        updatedCart[existingItemIndex].cantidad = newQuantity;
        setCart(updatedCart);
      } else {
        // Optionally, you can show a message or take some other action when the stock is exceeded.
        console.error("No puedes agregar mas cantidad. Stock limitado.");
      }
    } else {
      setCart((prevCart) => [...prevCart, { ...item, cantidad: 1 }]);
    }
  }; 

  const removeFromCart = (itemId) => {
    // Puedes utilizar filter para eliminar el item del carrito o decrementar la cantidad
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, cantidad: item.cantidad - 1 } : item
    );

    setCart(updatedCart.filter((item) => item.cantidad > 0));
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
