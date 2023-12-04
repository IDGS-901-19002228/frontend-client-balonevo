import { useState } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

const DireccionesForm = () => {

  const { authState } = useContext(AuthContext);
  const usuario = authState.usuario; 
  const { name } = useParams();
  const [direccion, setDireccion] = useState({
    nombreCompleto: '',
    calleNumero: '', 
    codigoPostal: '',
    telefono: '',
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
    setDireccion({
      ...direccion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Direccion/${name}`, {
        ...direccion,
      });

      console.log('Dirección agregada con éxito:', response.data);

      // Puedes realizar acciones adicionales después de agregar la dirección
      setDireccion({
        nombreCompleto: '',
        calleNumero: '',
        codigoPostal: '',
        telefono: '',
      });
    } catch (error) {
      console.error('Error al agregar la dirección:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Agregar Nueva Dirección</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreCompleto">
          Nombre Completo:
        </label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={direccion.nombreCompleto}
          onChange={handleInputChange}
          className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calleNumero">
            Calle y Número:
          </label>
          <input
            type="text"
            id="calleNumero"
            name="calleNumero" 
            value={direccion.calleNumero}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigoPostal">
          Código Postal:
        </label>
        <input
          type="text"
          id="codigoPostal"
          name="codigoPostal"
          value={direccion.codigoPostal}
          onChange={handleInputChange}
          className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={direccion.telefono}
          onChange={handleInputChange}
          className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Agregar Dirección
        </button>
    </form>
  </div>
  );
};

export default DireccionesForm;
