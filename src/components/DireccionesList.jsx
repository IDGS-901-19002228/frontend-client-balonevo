import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';


const DireccionesList = () => {
    
  const navigate = useNavigate();
  const [direcciones, setDirecciones] = useState([]);
  const { authState } = useContext(AuthContext); 
  const { name } = useParams();
  const usuario = authState.usuario; 

  const handleRegistrarTarjeta = () => {
    if (authState.isAuthenticated) {
      // Lógica para realizar el pedido (usuario autenticado)
      navigate(`/direcciones/${usuario?.usuario}`);
    }else {
      Swal.fire({
        icon: 'error',
        title: 'No iniciaste sesion',
        text: 'Inicia sesion para continuar',
    });
    navigate(`/login`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Direccion/${name}`);
        setDirecciones(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [name]);

  // const eliminarDireccion = async (id) => {
  //   try {
  //     await axios.delete(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Direccion/${id}`);
  //     // Refresh the list after deleting
  //     const res = await axios.get(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Direccion/${name}`);
  //     setDirecciones(res.data);
  //   } catch (error) {
  //     console.error('Error deleting data:', error);
  //   }
  // };

  // const seleccionarDireccion = (direccion) => { 

  //   if (authState.isAuthenticated) {
      
  //     navigate(`/tarjetas/${usuario?.usuario}`, {state: {direccionData: direccion}});
      
  //   } else {
     
  //     navigate('/login');
  //     console.log('Usuario no autenticado. Redirigir a iniciar sesión.');
  //   }
  // };
  

  return (
    <div className='m-4 container mx-auto px-8 bg-white border border-gray-200 rounded-lg'>
    <h1 className='text-2xl font-bold mb-4 text-center'>Mis Direcciones</h1>
    <table className='min-w-full divide-y divide-gray-400 px-9 bg-white border border-gray-300 rounded-lg'>
     <thead className='bg-gray-50'>
         <tr>
           <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
             Nombre de recibidor
           </th>
           <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
             domicilio
           </th>
           <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
             Código Postal 
           </th>
           <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
             Telefóno
           </th>
           
           <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
             
           </th>
         </tr>
       </thead>
       <tbody className='bg-white divide-y divide-gray-200'>
         {direcciones !== null ? (
           direcciones.map((direccion) => (
             <tr key={direccion.id} className='hover:bg-gray-100'>
               <td className='px-6 py-4 whitespace-nowrap'>{direccion.nombreCompleto}</td>
               <td className='px-6 py-4 whitespace-nowrap'>{direccion.calleNumero} </td>
               <td className='px-6 py-4 whitespace-nowrap'>{direccion.codigoPostal}</td>
               <td className='px-6 py-4 whitespace-nowrap'>{direccion.telefono}</td>
               <td className='px-6 py-4 whitespace-nowrap'>
                  {/* <button  onClick={() => seleccionarDireccion(direccion)}
                    className="agregarProducto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Seleccionar
                  </button> */}
                 {/* <button onClick={() => eliminarDireccion(direccion.id)} className="eliminarDireccion text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Eliminar
                  </button> */}
               </td>
             </tr>
           ))
         ) : (
           <tr>
             <td colSpan='5' className='px-6 py-4 whitespace-nowrap'>
               Cargando direcciones...
             </td>
           </tr>
         )}
       </tbody>
     </table>
     <button onClick={handleRegistrarTarjeta} className="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
        Agregar Nueva Direccion
      </button>
   </div>
   
   
  );
};

export default DireccionesList;