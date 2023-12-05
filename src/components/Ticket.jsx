import { useLocation } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const Ticket = () => {

    const { cart } = useCarrito();
    const location = useLocation();
    const direccionData = location.state?.direccionData;
    const tarjetaData = location.state?.tarjetaData;
    
    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.precio, 0).toFixed(2);
    };

    console.log(location.state);

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
                            <li  className="p-4 border rounded-md">
                                <p className="text-gray-600">Número de Tarjeta: {tarjetaData.nombreTarjeta}</p>
                                <p className="text-gray-600">Número de Tarjeta: **** **** ****  {tarjetaData.numTarjeta.slice(-4)}</p>
                                <p className="text-gray-600">Fecha de Vencimiento: {tarjetaData.fechaVencimiento}</p>
                                <p className="text-gray-600">CVV: {tarjetaData.ccv.replace(/./g, '*')}</p>
                                <button
                                    className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
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
                                            <p className="text-gray-500">${item.precio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4">
                                <div className="text-xl font-semibold mt-auto">
                                    Total: ${calcularTotal()}
                                </div>
                                <button className="bg-blue-700 text-white px-4 py-2 mt-2 hover:bg-blue-800 focus:outline-none">
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