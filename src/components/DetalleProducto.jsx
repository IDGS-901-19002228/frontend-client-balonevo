import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useCarrito } from '../context/CarritoContext';

const DetalleProducto = () => {
    const { addToCart } = useCarrito();
    // const [quantity, setQuantity] = useState(1);

    const [product, setProduct] = useState(null);
    const { id } = useParams();
    console.log('ID del producto:', id);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://idgs901apibalones20231114015214.azurewebsites.net/api/productos/buscarbyid/${id}`);
            setProduct(response.data);
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [id]);

      console.log('Estado del producto:', product);

  if (!product) {
    return <div>Cargando...</div>
  }

    return(
        
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <div key={product[0].id} className="flex items-center justify-center w-full mb-10">
              <img 
                src={product[0].imagen} 
                alt={product[0].nombre}
                className="object-cover w-full h-96 rounded"
                style={{ maxWidth: '400px', width: '100%', height: '350px' }}  
              />
            </div>
          </div>
  
          <div>
            <div>
              <h5 className="mb-2 text-2xl font-bold leading-none sm:text-3xl">
                {product[0].nombre}
              </h5>  
            </div>
            
              <span>Descripcion: </span>
              <p className="mb-5 text-gray-800">
                {product[0].descripcion}
              </p>
            <div className="flex items-center mt-3">
              <h5 className="mr-2 text-xl">Cantidad Disponible: {product[0].stock}</h5>
            </div> 
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <Rating rating={product[0].rating} />
              </div>
            </div>
            
            <div className="flex items-center mt-3">
              <h5 className="mr-2 text-xl font-bold">Precio ${product[0].precio}</h5>
            </div>
  
            {/* <div className="mt-3 space-y-2">
              <label className="text-gray-700" htmlFor="count">
                Cantidad
              </label>
  
              <div className="flex items-center mt-1">
                <button
                  className="w-6 h-10 text-gray-500 focus:outline-none hover:bg-gray-100 hover:text-gray-600"
                  onClick={() => 
                    quantity > 1 && setQuantity(prevCount => prevCount - 1)
                  }
                >
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    width="10"
                    height="10"
                  >
                    <path
                      d="M9.00002 1L3.00002 5L9.00002 9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
  
                <input
                  className="w-12 mx-2 rounded border py-1 pl-3 pr-12 text-center focus:outline-none"
                  type="number"
                  value={quantity}
                  onChange={(e)=> setQuantity(e.target.value)}  
                />
  
                <button
                  className="w-6 h-10 text-gray-500 focus:outline-none hover:bg-gray-100 hover:text-gray-600"
                  onClick={() => setQuantity(prevCount => prevCount + 1)}
                >
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    width="10"
                    height="10"
                  >
                    <path
                      d="M1 9V1H5L9 5V9H1Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
  
            <div className="flex gap-2 mt-5">
                {product[0].stock <= 0 ? (
                    <p className="text-red-500 font-semibold">Producto no disponible</p>
                  ) : (
                    <button 
                      onClick={() => addToCart(product[0])}
                      className="agregarProducto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  )}
            </div>
         </div>
       </div>
      </div>    
    );

}

export default DetalleProducto