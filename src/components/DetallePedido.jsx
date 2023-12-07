import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// import { Link } from 'react-router-dom';


const DetallePedido = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Pedidos/verDetallePedido?id=${id}`);
          setProductos(res.data);
          console.log(res.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [id]);

 // Calculate the total sum of prices
 const total = productos.reduce((acc, producto) => {
    return acc + producto.productos.precio * producto.cantidad;
  }, 0);
  
  return (
   <div className='m-4 container mx-auto px-8 bg-white border border-gray-200 rounded-lg'>
    <h1 className='text-2xl font-bold mb-4 text-center'>Detalle del pedido</h1>
    
     <table className='min-w-full divide-y divide-gray-400 px-9 bg-white border border-gray-300 rounded-lg'>
    <thead className='bg-gray-50'>
        <tr>
          <th className='px-4 py-2'>Producto</th>
          <th className='px-4 py-2'>Descripción</th>
          <th className='px-4 py-2'>Cantidad</th>
          <th className='px-4 py-2'>Precio</th>
        </tr>
      </thead>
      <tbody  className='text-center'>
        {productos !== null ? (
          productos.map((producto) => (
            <tr key={producto.id} className='border-t border-gray-300'>
              <td className='text-center'>
                <p>{producto.productos.nombre}</p>
                <img src={producto.productos.imagen} alt="" width="60" height="80" className='mx-auto mt-2' />
              </td>
              <td className='px-4 py-2'>{producto.productos.descripcion}</td>
              <td className='px-4 py-2'>{producto.cantidad}</td>
              <td className='px-4 py-2'>${producto.productos.precio * producto.cantidad}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className='px-4 py-2'>Cargando pedidos...</td>
          </tr>
        )}
      </tbody>
    </table>
    <h6 className='text-lg mb-2 text-right'>Total del pedido: ${total}</h6>
   
  </div>
  

  )
}

export default DetallePedido