import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import AboutPage from './pages/AboutPage';
import Login from './components/Login';
import Registro from './components/Registro';
import { ProtectedRoute } from './components/ProtectedRoute';
import PedidosCliente from './components/PedidosCliente';
import { CarritoProvider } from './context/CarritoContext';
import Carrito from './components/Carrito';
import DetallePedido from './components/DetallePedido';
import DireccionesPage from './pages/DireccionesPage';
import { AuthProvider } from './context/AuthContext';


const App = () => {
  const [userData, setUserData] = useState(null
   /*  {id: null,
    nombre: "",
    rol: {},
    permissions: []
  } */);


  const handleLogin = (userData) => {
    // Lógica para manejar el inicio de sesión (por ejemplo, almacenar datos de usuario en el estado)
    setUserData(userData);
    console.log(userData);
  };

  const handleLogout = () => {
    // Lógica para manejar el cierre de sesión (por ejemplo, limpiar datos de usuario en el estado)
    setUserData({
      id: null,
      nombre: "",
      rol: {},
      permissions: []
    });
  };


  return (
    <AuthProvider>
      <CarritoProvider> {/* Envuelve la aplicación con el proveedor del contexto del carrito */}
        <BrowserRouter>
          <Navbar userData={userData} onLogout={handleLogout} />
          <div className="pt-20">
            <Routes>
              <Route element={<ProtectedRoute isAllowed={userData?.rol?.includes('Cliente')} />}> 
                <Route path="/pedidos/:name" element={<PedidosCliente />} />
                <Route path="/detallePedido/:id" element={<DetallePedido/>} />
                <Route path="/direcciones" element={<DireccionesPage/>} />
              </Route>
            
              <Route path="/carrito" element={<Carrito logged={userData?.logged} />} /> {/* Ruta para el carrito */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/registro" element={<Registro />} />

            </Routes>
          </div>
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
};

export default App;
