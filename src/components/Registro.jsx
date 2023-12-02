import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useHistory } from 'react-router-dom';

const Registro = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    id: 0,
    nombre: '',
    usuario: '',
    correo: '',
    contrasenia: '',
    rol: 'Cliente',
    estatus: 'Activo'
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Your validation logic here
    
    try {
      const response = await fetch(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Auth/verificar?usuario=${cliente.usuario}`);
      const estatusResponse = await response.json();
      
      if (estatusResponse.resp === 'Si') {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El nombre de usuario ya está ocupado, intenta con otro'
        });
      } else {
        const result = await Swal.fire({
          title: 'Confirmar Datos',
          text: '¿Estás seguro de que los datos ingresados son correctos?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, estoy seguro',
          cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
          const postResponse = await fetch('https://idgs901apibalones20231114015214.azurewebsites.net/api/Cliente', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
          });

          const data = await postResponse.json();
          console.log('Usuario agregado:', data);

          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Registro exitoso'
          });

          navigate('/login');
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al verificar el usuario'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-medium mb-6 text-center">Registro</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="border p-2 w-full rounded mt-1"
            placeholder="Nombre"
            value={cliente.nombre}
            onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold" htmlFor="usuario">
            Usuario
          </label>
          <input
            type="text"
            id="usuario"
            className="border p-2 w-full rounded mt-1"
            placeholder="Usuario"
            value={cliente.usuario}
            onChange={(e) => setCliente({ ...cliente, usuario: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold" htmlFor="usuario">
            Correo
          </label>
          <input
            type="text"
            id="correo"
            className="border p-2 w-full rounded mt-1"
            placeholder="Correo"
            value={cliente.correo}
            onChange={(e) => setCliente({ ...cliente, correo: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold" htmlFor="usuario">
            Contraseña
          </label>
          <input
            type="password"
            id="contrasenia"
            className="border p-2 w-full rounded mt-1"
            placeholder="Contrasenia"
            value={cliente.contrasenia}
            onChange={(e) => setCliente({ ...cliente, contrasenia: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            id="registrarNuevoCliente"
            type="submit"
            className="bg-indigo-500 text-white rounded py-2 px-4 hover:bg-indigo-600"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registro;