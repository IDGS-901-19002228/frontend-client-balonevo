import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";


const TarjetasForm = () => {

    const { authState } = useContext(AuthContext);
    const usuario = authState.usuario; 
    const { name } = useParams();
    const navigate = useNavigate();
    const [tarjetas, setTarjetas] = useState({
      nombreTarjeta: '',
      numTarjeta: '', 
      fechaVencimiento: '',
      ccv: '',
      usuario: {
        id: 0,
        usuario: usuario?.usuario,
        correo: '',
        contrasenia: '',
        rol: '',
        estatus: ''
      }
    });
  
    const handleInputChange = (e) => {
        setTarjetas({
        ...tarjetas,
        [e.target.name]: e.target.value,
      });
    };

    const handleRegresarTarjetaList = () => {
        if (authState.isAuthenticated) {
          // Lógica para realizar el pedido (usuario autenticado)
          navigate(`/tarjetas/${usuario?.usuario}`);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Tarjetas/${name}`, {
          ...tarjetas,
        });
  
        console.log('Dirección agregada con éxito:', response.data);
        Swal.fire({
            icon: 'success',
            title: 'Tarjeta registrada con exito',
            text: 'Tu tarjeta ha sido registrada correctamente',
          }).then(() => {
            navigate(`/tarjetas/${usuario?.usuario}`);
          })
        // Puedes realizar acciones adicionales después de agregar la dirección
        setTarjetas({
            nombreTarjeta: '',
            numTarjeta: '', 
            fechaVencimiento: '',
            ccv: '',
        });
      } catch (error) {
        console.error('Error al agregar la dirección:', error);
      }
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-4">Registrar Tarjeta</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-600">
                    Nombre en Tarjeta
                    </label>
                    <input
                    type="text"
                    id="nombreTarjeta"
                    name="nombreTarjeta"
                    value={tarjetas.nombreTarjeta}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="1234 5678 9012 3456"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
                    Número de Tarjeta
                    </label>
                    <input
                    type="text"
                    id="numTarjeta"
                    name="numTarjeta"
                    value={tarjetas.numTarjeta}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="1234 5678 9012 3456"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
                            Fecha de Vencimiento
                        </label>
                        <input
                            type="text"
                            id="fechaVencimiento"
                            name="fechaVencimiento"
                            value={tarjetas.fechaVencimiento}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="MM/YY"
                            maxLength="4"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
                            CVV
                        </label>
                        <input
                            type="password"
                            id="ccv"
                            name="ccv"
                            value={tarjetas.ccv}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="123"
                            maxLength="4"
                        />
                    </div>
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Registrar Tarjeta
                </button>
                <button onClick={handleRegresarTarjetaList} className="mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                    Regresar
                </button>
            </form>
        </div>
    )
}

export default TarjetasForm