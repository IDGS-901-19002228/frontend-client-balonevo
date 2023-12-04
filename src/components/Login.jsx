//import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { setUserData } = useContext(AuthContext);

  // const handleLogin = (userData) => {
  //    userData(userData); 
  // };

  const onSubmit = async (data) => {
    try {
      // Make a request to check the user status
      const statusResponse = await axios.get(
        `https://idgs901apibalones20231114015214.azurewebsites.net/api/auth/usuario?usuario=${data.usuario}`
      );

      if (statusResponse.data.estatus === 'Activo') {
        // If user is active, proceed with login
        const response = await axios.post(
          'https://idgs901apibalones20231114015214.azurewebsites.net/api/Auth/login',
          {
            usuario: data.usuario,
            contrasenia: data.contrasenia,
          }
        );

        const userData = {  
          usuario: data.usuario,
          rol: response.data.rol 
        };
    
        setUserData(userData);
        

        // Call the onLogin function and pass the userData
        //onLogin(userData);

        console.log(userData);

        // Redirect to home based on role
        if (userData.rol === 'Cliente') {
          navigate('/',{
            replace: true,
            state: {
              logged: true
            }
          });
        } else {
          console.log('Role no reconocido');
        }
      } else {
        // If user is inactive, show a message
        console.log('Cuenta inactiva');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Iniciar Sesión</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label className="block" htmlFor="usuario">
              Usuario
            </label>

            <input
              type="text"
              name="usuario"
              {...register('usuario')}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="mt-4">
            <label className="block">Contraseña</label>

            <input
              type="password"
              name="contrasenia"
              {...register('contrasenia')}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="flex items-baseline justify-center mt-4">
            <button 
              id='ingresar'
              type="submit"
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Iniciar Sesión
            </button>

            {/* <a href="#" className="text-sm text-blue-600 hover:underline">
              ¿Olvidó su contraseña?
            </a> */}
          </div>
        </form>

        <div className="mt-6 text-grey-dark">
          ¿No tienes una cuenta?
          <NavLink to="/registro">
            <a id="registrarse" className="text-blue-600 hover:underline" href="#">
              Regístrate
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;