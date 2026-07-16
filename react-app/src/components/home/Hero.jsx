// components/home/Hero.jsx
import { Link } from 'react-router-dom';

const Hero = () => (
  <section id="hero">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <h1 className="hero-title mb-3">
            Tu <em>futuro profesional</em> empieza aquí
          </h1>
          <p className="hero-desc mb-4">
            ConectaJoven es la plataforma de orientación vocacional y empleo
            diseñada para universitarios de Lambayeque. Descubre tu camino,
            accede a oportunidades reales y construye tu carrera profesional.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/#servicios" className="btn btn-cj">Explorar servicios</Link>
            <Link to="/#contacto" className="btn btn-cj-outline">Solicitar orientación</Link>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="hero-main-card">
            <img
              src="/img/hero-universitarios.jpg"
              alt="Jóvenes universitarios trabajando en equipo en una plataforma digital"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '180px', width: '100%', objectFit: 'cover' }}
            />
            <div className="row g-3 mb-3">
              <div className="col-6">
                <div className="stat-card">
                  <div className="stat-num">+1,200</div>
                  <div className="stat-label">Jóvenes orientados</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card">
                  <div className="stat-num">85%</div>
                  <div className="stat-label">Inserción laboral</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card">
                  <div className="stat-num">60+</div>
                  <div className="stat-label">Empresas aliadas</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card">
                  <div className="stat-num">15+</div>
                  <div className="stat-label">Carreras asesoradas</div>
                </div>
              </div>
            </div>
            <div className="live-badge">
              <div className="live-dot"></div>
              <div className="live-text">
                <strong>Nuevo: Feria Laboral Virtual 2025</strong>
                Inscripciones abiertas hasta el 30 de junio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
