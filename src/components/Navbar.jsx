import { Link, NavLink} from 'react-router-dom'
// import { useState } from 'react';
// import Swal from 'sweetalert2';
import { useCarrito } from '../context/CarritoContext';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const  {state} = useLocation();
    //const navigate = useNavigate();
    const { cart } = useCarrito();
    const { authState, logout } = useContext(AuthContext); 
    const usuario = authState.usuario; 
    // const handleLogin = () => {
    //   // Lógica para iniciar sesión
    //   setIsLoggedIn(true);
    // };
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleToggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    }



  

    // const handleLogout = () => {
    //     navigate('/', {
    //         replace: true
    //     },
    // );
    //   // Lógica para cerrar sesión
    //   Swal.fire({
    //     title: 'Confirmar Cierre de sesión',
    //     text: '¿Seguro que quieres cerrar sesión?',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'Si',
    //     cancelButtonText: 'No'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       // Lógica para cerrar sesión
    //       setIsLoggedIn(false);
    //       // Otras acciones después de cerrar sesión, como redirigir a la página de inicio de sesión
    //     }
    //   });
    //};

    return(
        <>
            <nav className="fixed top-0 left-0 z-50 w-full shadow bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/public/logo_transparente.png" className="h-11" alt="BalonEvo Logo" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <div className='flex ml-5 space-x-2'>
                        {/* Condicionalmente renderiza el botón de inicio de sesión o la opción de perfil */}
                        <NavLink to="/carrito">
                                {/* Muestra el número de productos en el carrito */}
                                <button type="button" className="relative carrito focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg
                                        className="h-6 w-6 text-white"  
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white" 
                                        >
                                        <path  
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span
                                        className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                                    >
                                        {cart.length}
                                    </span>
                                </button>
                            </NavLink>
                        {authState?.isAuthenticated? (
                        <div className="flex items-center space-x-2">
                            {/* Puedes personalizar la opción de perfil según tus necesidades */}
                            {/* <span className="text-gray-900">Hola, Usuario</span> */}
                            {/* <button
                            onClick={handleLogout}
                            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                            Cerrar Sesión
                            </button> */}
                            
                            {/* <button
                                type="button"
                                id='cerrarSesion'
                                onClick={handleLogout}
                                className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Logout
                            </button> */}
                        
                            {/* <NavLink to="/carrito">
                                <button type="button" className="relative carrito focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg
                                        className="h-6 w-6 text-white"  
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white" 
                                        >
                                        <path  
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span
                                        className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                                    >
                                        {cart.length}
                                    </span>
                                </button>
                            </NavLink> */}
                            {/* <NavLink to={`/pedidos/${userData?.usuario}`}>
                                <a href="" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Mis pedidos</a>
                            </NavLink> */}
                            {/* <NavLink to='/direcciones'>
                                <a href="" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Direcciones</a>
                            </NavLink> */}
                            
                            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button 
                                    onClick={handleToggleProfileMenu}
                                    className="flex items-center space-x-2 text-white hover:text-gray-400"
                                    >
                                    <svg 
                                        className="h-5 w-5" 
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"  
                                        stroke="currentColor" 
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M3.13004 21.2101C3.04238 21.3865 3 21.5862 3 21.7868C3 22.6323 4.12137 23.5 5.22139 23.5H18.7788C19.8787 23.5 21 22.6323 21 21.7868C21 21.5862 20.9577 21.3865 20.8701 21.2101C20.6338 20.5187 20 19.7295 20 18.9211V18C20 17.204 19.6839 16.4413 19.1213 15.8787C18.5587 15.3161 17.796 15 17 15C16.204 15 15.4413 15.3161 14.8787 15.8787C14.3161 16.4413 14 17.204 14 18V18.9211C14 19.729 13.3662 20.5185 13.13 21.2101H3.13004Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                    </svg>

                                    <span className="hidden md:inline">Perfil</span> 
                                </button>
                                {showProfileMenu && (
                                    <div className="absolute top-16 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <div className="px-4 py-3">
                                            <span className="block text-sm text-gray-900 dark:text-white">
                                                {usuario.usuario}
                                            </span>
                                            {/* <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                                {usuario.correo}
                                            </span> */}
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <Link
                                                    to={`/pedidos/${usuario?.usuario}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                    Mis Pedidos
                                                </Link>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to={`/direcciones/${usuario?.usuario}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                    Direcciones
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={logout} 
                                                    to="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                    Cerrar Sesión
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>


                        </div>
                        ) : (
                            <NavLink to="/login">
                                <button
                                id="login"
                                type="button"
                                // onClick={handleLogin}
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Login
                                </button>
                            </NavLink>
                        )}
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active':'hover')} to="/">
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Inicio</a>
                        </NavLink>
                        </li>
                        <li>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active':'hover')} to="/about">
                            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Acerca De</a>
                        </NavLink>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tienda</a>
                        </li>
                        {/* <li>
                            {user.rol && (
                                <h6 className="text-grey">
                                    {user.rol === 'Cliente' ? (
                                    <>
                                        <NavLink className={({ isActive }) => (isActive ? 'active':'hover')} to="/about">
                                            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pedidos</a>
                                        </NavLink>
                                    </>
                                    ) : (
                                    <>
                                        <span className="other-role"></span>
                                        Otro Rol
                                    </>
                                    )}
                                </h6>
                            )}
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
    </>
    )

}

export default Navbar