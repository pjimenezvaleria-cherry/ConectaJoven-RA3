// App.jsx
// Define las rutas de la aplicación (una landing page + 3 formularios),
// todas dentro del mismo proyecto React (RA3).
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostulacionPage from './pages/PostulacionPage';
import useScrollToHash from './hooks/useScrollToHash';

function App() {
  useScrollToHash();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/postulacion" element={<PostulacionPage />} />
    </Routes>
  );
}

export default App;
