// components/layout/Footer.jsx
// Footer completo para la página de inicio, con enlaces reales a redes
// sociales (se abren en pestaña nueva) y navegación interna con React Router.
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4 footer-col">
          <div className="footer-logo">Conecta<span>Joven</span></div>
          <p className="footer-desc">
            Plataforma de orientación vocacional y empleo para jóvenes universitarios
            de la región Lambayeque, Perú.
          </p>
        </div>

        <div className="col-6 col-lg-2 footer-col">
          <h6>Plataforma</h6>
          <ul>
            <li><Link to="/#sobre">Nosotros</Link></li>
            <li><Link to="/#servicios">Servicios</Link></li>
            <li><Link to="/#estadisticas">Estadísticas</Link></li>
            <li><Link to="/#recursos">Recursos</Link></li>
            <li><Link to="/#contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="col-6 col-lg-3 footer-col">
          <h6>Servicios</h6>
          <ul>
            <li><Link to="/#servicios">Orientación Vocacional</Link></li>
            <li><Link to="/postulacion">Bolsa de Empleo</Link></li>
            <li><Link to="/#servicios">Becas</Link></li>
            <li><Link to="/#servicios">Mentores</Link></li>
          </ul>
        </div>

        <div className="col-6 col-lg-3 footer-col">
          <h6>Síguenos</h6>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-desc text-center py-3 mb-0">© 2026 ConectaJoven – Grupo 01 – USS</p>
    </div>
  </footer>
);

// Footer reducido, usado en Login / Registro / Postulación (igual que en el
// proyecto original: solo el aviso de derechos de autor).
export const SimpleFooter = () => (
  <footer>
    <div className="container">
      <p className="footer-desc text-center py-3 mb-0">© 2026 ConectaJoven – Grupo 01 – USS</p>
    </div>
  </footer>
);

export default Footer;
