import { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from './Rating';
import { useCarrito } from '../context/CarritoContext'; // Importa el hook del contexto del carrito

const CatalogoHome = () => {
  const { addToCart } = useCarrito();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://idgs901apibalones20231114015214.azurewebsites.net/api/Productos');
        setResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

    // Asegurarse de que haya datos antes de renderizar el componente CatalogoCard
    if (!results || results.length === 0) {
        return null;
    }
    // Limitar la cantidad de productos a mostrar a un máximo de 10
    const productosAMostrar = results.slice(0, 10);

  return (
    <>
      <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {productosAMostrar.map(item => (
            <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-center">
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg" 
                    src={item.imagen}
                    alt={item.nombre}
                    style={{ maxWidth: '300px', width: '100%', height: '250px' }}  
                  />
                </a>
              </div>

              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.nombre}
                  </h5> 
                </a>

                <Rating rating={item.rating} />

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${item.precio}  
                  </span>
                  {item.stock <= 0 ? (
                    <p className="text-red-500 font-semibold">Producto no disponible</p>
                  ) : (
                    <button 
                      onClick={() => addToCart(item)}
                      className="agregarProducto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CatalogoHome;
