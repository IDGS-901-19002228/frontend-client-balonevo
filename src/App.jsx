
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import AboutPage from './pages/AboutPage';
import Login from './components/Login';
import Registro from './components/Registro';
import PedidosCliente from './components/PedidosCliente';
import { CarritoProvider } from './context/CarritoContext';
import Carrito from './components/Carrito';
import DetallePedido from './components/DetallePedido';
import { AuthProvider } from './context/AuthContext';
import DireccionesForm from './components/DireccionesForm';
import DireccionesPage from './pages/DireccionesPage';


const App = () => {
 

  return (
    <AuthProvider>
      <CarritoProvider> 
        <BrowserRouter>
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="/pedidos/:name" element={<PedidosCliente />} />
              <Route path="/detallePedido/:id" element={<DetallePedido/>} />
              <Route path="/direcciones/:name" element={<DireccionesForm/>} />
              <Route path="/direccion/:name" element={<DireccionesPage/>} />
              <Route path="/carrito" element={<Carrito />} /> {/* Ruta para el carrito */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />

            </Routes>
          </div>
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
};

export default App;
