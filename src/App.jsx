import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import AboutPage from './pages/AboutPage';
import Login from './components/Login';

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleLogin = (userData) => {
    // Lógica para manejar el inicio de sesión (por ejemplo, almacenar datos de usuario en el estado)
    setUserData(userData);
  };

  return (
    <BrowserRouter>
      <Navbar userData={userData} />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
