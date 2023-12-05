import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const TarjetasList = () => {

    const [tarjetas, setTarjetas] = useState([]);
    const { authState } = useContext(AuthContext); 
    const usuario = authState.usuario; 
    const navigate = useNavigate();
    const { name } = useParams();
    const location = useLocation();
    const direccionData = location.state?.direccionData;

    const handleRegistrarTarjeta = () => {
        if (authState.isAuthenticated) {
          // Lógica para realizar el pedido (usuario autenticado)
          navigate(`/tarjetasform/${usuario?.usuario}`);
      }
    };
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Tarjetas/${name}`);
          setTarjetas(res.data);
          console.log(res.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [name]);

    const seleccionarTarjeta = (tarjeta) => { 

        if (authState.isAuthenticated) {
          // Lógica para realizar el pedido (usuario autenticado)
            navigate('/ticket', {
                state: {
                    tarjetaData: tarjeta, 
                    direccionData: direccionData
                }
            });
        } else {
          // Lógica para mostrar un mensaje o redirigir al usuario para iniciar sesión
          navigate('/login');
          console.log('Usuario no autenticado. Redirigir a iniciar sesión.');
        }    
    };

    console.log(location.state);

    return(

        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tarjetas Registradas</h2>
            {tarjetas !== null ? (
                tarjetas.map((tarjeta) => (
                        <ul key={tarjeta.id} className="space-y-4">
                            <li  className="p-4 border rounded-md">
                                <p className="text-gray-600">Número de Tarjeta: {tarjeta.nombreTarjeta}</p>
                                <p className="text-gray-600">Número de Tarjeta: **** **** ****  {tarjeta.numTarjeta.slice(-4)}</p>
                                <p className="text-gray-600">Fecha de Vencimiento: {tarjeta.fechaVencimiento}</p>
                                <p className="text-gray-600">CVV: {tarjeta.ccv.replace(/./g, '*')}</p>
                                <button
                                    className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                                    // onClick={() => handleDeleteClick(index)}
                                >
                                    Eliminar
                                </button>
                                <button  onClick={() => seleccionarTarjeta(tarjeta)}
                                    className="agregarProducto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Seleccionar
                                </button>
                            </li>
                        </ul>
                    ))
                ) : (
                    <tr>
                        <p colSpan='5' className='px-6 py-4 whitespace-nowrap'>
                            Cargando Tarjetas...
                        </p>
                    </tr>
            )}
            <button onClick={handleRegistrarTarjeta} className="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                Agregar Nueva Tarjeta
            </button>
        </div>

    );

}

    




export default TarjetasList;