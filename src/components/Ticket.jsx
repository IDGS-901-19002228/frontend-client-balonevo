import { useLocation } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Ticket = () => {

    const { cart } = useCarrito();
    const { authState } = useContext(AuthContext);
    const usuario = authState.usuario;
    const location = useLocation();
    const direccionData = location.state?.direccionData;
    const tarjetaData = location.state?.tarjetaData;
    
    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
      };

      const agregarPedido = async () => {
        try {
            const fecha = new Date();
            const agregarCero = (valor) => (valor < 10 ? `0${valor}` : valor);
            const year = fecha.getFullYear();
            const month = fecha.getMonth();
            const day = agregarCero(fecha.getDate());

            const date = `${year}-${month + 1}-${day}`;

            const response = await axios.post(
                'https://idgs901apibalones20231114015214.azurewebsites.net/api/Pedidos',
                {
                        idPedido: 0,
                        cliente: {
                          id: 0,
                          nombre: "string",
                          usuario: usuario?.usuario,
                          correo: "string",
                          contrasenia: "string",
                          rol: "string",
                          estatus: "string"
                        },
                        direccion: {
                          id: direccionData.id,
                          nombreCompleto: direccionData.nombreCompleto,
                          calleNumero: direccionData.calleNumero,
                          codigoPostal: direccionData.codigoPostal,
                          telefono: direccionData.telefono,
                          usuario: {
                            id: 0,
                            nombre: "string",
                            usuario: usuario?.usuario,
                            correo: "string",
                            contrasenia: "string",
                            rol: "string",
                            estatus: "string"
                          }
                        },
                        tarjeta: {
                          id: tarjetaData.id,
                          nombreTarjeta: tarjetaData.nombreTarjeta,
                          numTarjeta:tarjetaData.numTarjeta,
                          fechaVencimiento: tarjetaData.fechaVencimiento,
                          ccv:tarjetaData.ccv ,
                          usuario: {
                            id: 0,
                            nombre: "string",
                            usuario: "string",
                            correo: "string",
                            contrasenia: "string",
                            rol: "string",
                            estatus: "string"
                          }
                        },
                        folio: uuidv4(),
                        fecha: date,
                        estatus: "En Proceso"
                      
                }
            );

            if (response.data && response.data.idPedido) {
              cart.forEach((producto) => {
                agregarDetallePedido(response.data.idPedido, producto);
              });  
            }
         
            //console.log(response.data);
        } catch (error) {
            console.error('Error al realizar el pedido:', error);
        }

    };

    const agregarDetallePedido =  async (idPedido, producto)  => {
        try {
            const response = await axios.post(
                'https://idgs901apibalones20231114015214.azurewebsites.net/api/Pedidos/insertar_detalle',
                {
                    id: 0,
                    cantidad: cart.cantidad,
                    pedidos:{ 
                        idPedido: idPedido,
                        cliente: {
                            id: 0,
                            nombre: "string",
                            usuario: "string",
                            correo: "string",
                            contrasenia: "string",
                            rol: "string",
                            estatus: "string"
                        },
                        direccion: {
                            id: 0,
                            nombreCompleto: "string",
                            calleNumero: "string",
                            codigoPostal: "string",
                            telefono: "string",
                            usuario: {
                                id: 0,
                                nombre: "string",
                                usuario: "string",
                                correo: "string",
                                contrasenia: "string",
                                rol: "string",
                                estatus: "string"
                            }
                        },
                        folio: "string",
                        fecha: "2023-12-05T14:31:16.078Z",
                        estatus: "string"
                    },
                    productos: {
                        id: producto.id,
                        nombre: producto.nombre,
                        imagen: producto.imagen,
                        descripcion: producto.descripcion,
                        precio: producto.precio,
                        stock: producto.stock,
                        estatus: producto.estatus,
                    }
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error('Error al realizar el pedido:', error);
        }

    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Detalles del pedido</h1>
            {direccionData ? (
                <div className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-col">
                    <h3>Direccion de entrega</h3>
                    <div className="bg-white p-4 rounded-md shadow-md mb-4 flex">
                        <div className="flex-shrink-0 mr-6">
                            <div  className="mb-2"><span className="font-semibold">Nombre de recibidor:</span> {direccionData.nombreCompleto}</div>
                        </div>
                        <div className="flex-shrink-0 mr-6">
                            <div className="mb-2"><span className="font-semibold">Domicilio:</span> {direccionData.calleNumero}</div>
                        </div>
                        <div className="flex-shrink-0 mr-6">
                            <div className="mb-2"><span className="font-semibold">Código Postal:</span> {direccionData.codigoPostal}</div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="mb-2"><span className="font-semibold">Teléfono:</span> {direccionData.telefono}</div>
                        </div>
                    </div>
                </div>

            ) : (
                <p>No se ha seleccionado ninguna dirección.</p>
            )}
           {tarjetaData ? (
                        <ul className="space-y-4">
                            <h3>Tarjeta Seleccionada</h3>
                            <li  className="p-4 border rounded-md">
                                <p className="text-gray-600">Número de Tarjeta: {tarjetaData.nombreTarjeta}</p>
                                <p className="text-gray-600">Número de Tarjeta: **** **** ****  {tarjetaData.numTarjeta.slice(-4)}</p>
                                <p className="text-gray-600">Fecha de Vencimiento: {tarjetaData.fechaVencimiento}</p>
                                <p className="text-gray-600">CVV: {tarjetaData.ccv.replace(/./g, '*')}</p>
                            </li>
                        </ul>
                ) : (
                    <p>No se ha seleccionado ninguna tarjeta.</p>
            )}

            <div className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-col sm:p-6 lg:p-8">
                <div className="text-2xl font-semibold mb-4">Lista de productos</div>

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
                                            <p className="text-gray-500">${item.precio} x {item.cantidad}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4">
                                <div className="text-xl font-semibold mt-auto">
                                    Total: ${calcularTotal()}
                                </div>
                                <button onClick={agregarPedido()} className="bg-blue-700 text-white px-4 py-2 mt-2 hover:bg-blue-800 focus:outline-none">
                                    Realizar pedido
                                </button>
                        </div>
                </div>
                    )}

            </div>
        </div>
    );
};

export default Ticket;