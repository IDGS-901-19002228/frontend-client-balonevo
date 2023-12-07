
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
// import DireccionesPage from './pages/DireccionesPage';
import Resultados from './pages/Resultados';
import TarjetasList from './components/TarjetasList';
import TarjetasForm from './components/TarjetasForm';
import TiendaPage from './pages/TiendaPage';
import Ticket from './components/Ticket';
import DireccionesList from './components/DireccionesList';
import DireccionesTicket from './components/DireccionesTicket';
import TarjetasTicket from './components/TarjetasTicket';
import Footer from './components/Footer';
import DetalleProducto from './components/DetalleProducto';
import DireccionesEditForm from './components/DireccionesEditForm';


const App = () => {
 
  

  return (
    <AuthProvider>
      <CarritoProvider> 
        <BrowserRouter>
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tienda" element={<TiendaPage />} />
              <Route path="/producto/:id" element={<DetalleProducto/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/pedidos/:name" element={<PedidosCliente />} />
              <Route path="/detallePedido/:id" element={<DetallePedido/>} />
              <Route path="/direcciones/:name" element={<DireccionesForm/>} />
              <Route path="/direccion/:name" element={<DireccionesList/>} />
              <Route path="/direccionEdit/:id" element={<DireccionesEditForm/>} />
              <Route path="/direccion-ticket/:name" element={<DireccionesTicket/>} />
              <Route path="/tarjetas/:name" element={<TarjetasList/>} />
              <Route path="/tarjetas-ticket/:name" element={<TarjetasTicket/>} />
              <Route path="/tarjetasform/:name" element={<TarjetasForm/>} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/resultados" element={<Resultados />} /> 
              <Route path="/ticket" element={<Ticket/>}/>
              {/* <Route pages="/preticket" element{<PreTicket/>} /> */}
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
};

export default App;
