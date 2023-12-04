import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Carrito = () => {
  const { authState } = useContext(AuthContext); 
  const { cart, removeFromCart, clearCart } = useCarrito();
  const usuario = authState.usuario; 
  const navigate = useNavigate();

  const handleRealizarPedido = () => {
    if (authState.isAuthenticated) {
      // Lógica para realizar el pedido (usuario autenticado)
      console.log('Pedido realizado');
      navigate(`/direccion/${usuario?.usuario}`);
    } else {
      // Lógica para mostrar un mensaje o redirigir al usuario para iniciar sesión
      navigate('/login');
      console.log('Usuario no autenticado. Redirigir a iniciar sesión.');
    }
  };

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <div className="flex items-center">
                <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                  <p className="text-lg font-semibold">{item.nombre}</p>
                  <p className="text-gray-500">${item.precio}</p>
                </div>
              </div>
              <div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600 focus:outline-none">
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <p className="text-xl font-semibold">Total: ${calcularTotal()}</p>
            <button onClick={handleRealizarPedido} className="bg-blue-700 text-white px-4 py-2 mt-2 hover:bg-blue-800 focus:outline-none">
              Proceder al pago
            </button>
            <button onClick={clearCart} className="bg-blue-700 text-white px-4 py-2 mt-2 hover:bg-blue-800 focus:outline-none">
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
