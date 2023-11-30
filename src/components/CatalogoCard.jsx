//import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from './Rating';

// Importa Axios
import './Catalogo.css';

const Catalogo = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(searchAPI);
        setResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // const navigate = useNavigate();  
  const searchAPI = 'https://idgs901apibalones20231114015214.azurewebsites.net/api/Productos';

  return (
    <>
      <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {results.map(item => (
            <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg" 
                  src={item.imagen}
                  alt={item.nombre}  
                />
              </a>

              <div className="px-5 pb-5">

                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.nombre}
                  </h5> 
                </a>

                {/* <div className="flex items-center mt-2.5 mb-5"> */}
                  {/* Utilizando el componente Rating */}
                  <Rating rating={item.rating} />
                  {/* <span className=" text-gray-700 dark:text-white">{item.rating}</span> */}
                {/* </div> */}

                <div className="flex items-center justify-between">
                  
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${item.precio}  
                  </span>

                  <button 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogo;