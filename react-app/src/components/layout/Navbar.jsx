// components/layout/Navbar.jsx
// Barra de navegación reutilizada en todas las páginas.
// - En Home muestra el menú completo + los dos botones de acceso.
// - En Login/Registro/Postulación muestra una versión reducida,
//   igual que en el proyecto original (solo marca + un botón de acceso).
import { Link } from 'react-router-dom';
import useNavbarScroll from '../../hooks/useNavbarScroll';

const NAV_LINKS = [
  { href: '/#sobre', label: 'Nosotros' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#estadisticas', label: 'Estadísticas' },
  { href: '/#recursos', label: 'Recursos' },
  { href: '/#contacto', label: 'Contacto' },
];

const Navbar = ({ variant = 'home' }) => {
  const scrolled = useNavbarScroll();

  // Cierra el menú colapsado (móvil) al hacer click en un enlace
  const closeMobileMenu = () => {
    const menu = document.getElementById('navbarMenu');
    if (menu && menu.classList.contains('show') && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  };

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/#hero">
            Conecta<span>Joven</span>
          </Link>

          {variant === 'home' ? (
            <>
              <button
                className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarMenu"
                aria-controls="navbarMenu" aria-expanded="false"
                aria-label="Abrir menú de navegación"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ms-auto gap-lg-2">
                  {NAV_LINKS.map((link) => (
                    <li className="nav-item" key={link.href}>
                      <Link className="nav-link" to={link.href} onClick={closeMobileMenu}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
                  <Link to="/login" className="btn btn-cj-outline btn-sm">Iniciar sesión</Link>
                  <Link to="/registro" className="btn btn-cj btn-sm">Crear cuenta</Link>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex gap-2">
              {variant === 'login' && (
                <Link to="/registro" className="btn btn-cj btn-sm">Crear cuenta</Link>
              )}
              {(variant === 'register' || variant === 'application') && (
                <Link to="/login" className="btn btn-cj-outline btn-sm">Iniciar sesión</Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
