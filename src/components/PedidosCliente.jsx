import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom';

const PedidosCliente = () => {
  const { name } = useParams();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Pedidos/${name}`);
        setPedidos(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className='m-4 container mx-auto px-8 bg-white border border-gray-200 rounded-lg'>
   <h1 className='text-2xl font-bold mb-4 text-center'>Mis Pedidos</h1>
   <table className='min-w-full divide-y divide-gray-400 px-9 bg-white border border-gray-300 rounded-lg'>
    <thead className='bg-gray-50'>
        <tr className='text-center'>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Folio
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Propietario
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Dirección de entrega
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Fecha
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Estatus
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Numero Tarjeta
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            Fecha Vencimiento
          </th>
          <th scope='col' className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider'>
            
          </th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {pedidos !== null ? (
          pedidos.map((pedido) => (
            <tr key={pedido.id} className='hover:bg-gray-100 text-center'>
              <td className='px-6 py-4 whitespace-nowrap'>{pedido.folio}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{pedido.direccion.nombreCompleto} </td>
              <td className='px-6 py-4 whitespace-nowrap'>{pedido.direccion.calleNumero}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{pedido.fecha}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{pedido.estatus}</td>
              <td className='px-6 py-4 whitespace-nowrap'>** ** **  {pedido.tarjeta.numTarjeta.slice(-4)}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{pedido.tarjeta.fechaVencimiento}</td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Link to={`/detallePedido/${pedido.idPedido}`} className='text-indigo-600 hover:text-indigo-900'>
                  Detalles
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

export default PedidosCliente;