// AgregarDireccionForm.jsx
//import { useState } from 'react';

const DireccionesForm = () => {
//   const [nuevaDireccion, setNuevaDireccion] = useState({
//     nombre: '',
//     direccion: '',
//     ciudad: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNuevaDireccion((prevDireccion) => ({
//       ...prevDireccion,
//       [name]: value,
//     }));
//   };

//   const agregarDireccion = () => {
//     // Aquí puedes agregar la lógica para validar y agregar la nueva dirección
//     onAgregarDireccion({
//       ...nuevaDireccion,
//       id: Math.floor(Math.random() * 1000), // Generar un ID único (puedes utilizar una lógica más robusta)
//     });

//     setNuevaDireccion({
//       nombre: '',
//       direccion: '',
//       ciudad: '',
//     });
//   };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Agregar Nueva Dirección</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            // value={nuevaDireccion.nombre}
            // onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="direccion">
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            // value={nuevaDireccion.direccion}
            // onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="ciudad">
            Ciudad:
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            // value={nuevaDireccion.ciudad}
            // onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
      </div>
      <button
        // onClick={agregarDireccion}
        className="bg-blue-700 text-white px-4 py-2 mt-2 hover:bg-blue-800 focus:outline-none"
      >
        Agregar Dirección
      </button>
    </div>
  );
};

export default DireccionesForm;
