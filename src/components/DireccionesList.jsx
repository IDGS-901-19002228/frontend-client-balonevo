import { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
//import { AuthContext } from '../context/AuthContext';
//import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';


const DireccionesList = () => {
    
  const [direcciones, setDirecciones] = useState([]);
 
  //const { authState } = useContext(AuthContext); 
  //const usuario = authState.usuario; 
  const { name } = useParams();

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

  return (
    <div className='container mx-auto px-8 bg-white border border-gray-200 rounded-lg'>
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
                 <Link className='text-indigo-600 hover:text-indigo-900'>
                   Seleccionar
                 </Link>
                 <Link className='text-indigo-600 hover:text-indigo-900'>
                   Eliminar
                 </Link>
               </td>
             </tr>
           ))
         ) : (
           <tr>
             <td colSpan='5' className='px-6 py-4 whitespace-nowrap'>
               Cargando pedidos...
             </td>
           </tr>
         )}
       </tbody>
     </table>
   </div>
   
  );
};

export default DireccionesList;