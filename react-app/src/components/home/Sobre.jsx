// components/home/Sobre.jsx
import { Link } from 'react-router-dom';

const Sobre = () => (
  <section id="sobre">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-5">
          <span className="cj-tag">¿Quiénes somos?</span>
          <h2 className="section-title">Impulsando el talento joven de Lambayeque</h2>
          <p className="section-sub mb-3">
            Somos una plataforma universitaria creada para reducir la brecha
            entre la formación académica y el mercado laboral, promoviendo
            una educación de calidad y oportunidades para todos.
          </p>
          <ul className="cj-list mb-4">
            <li>✔ Orientación personalizada y gratuita</li>
            <li>✔ Alianzas con más de 60 empresas regionales</li>
            <li>✔ Cobertura en toda la región Lambayeque</li>
            <li>✔ Equipo de orientadores certificados</li>
          </ul>
          <Link to="/#servicios" className="btn btn-cj">Ver nuestros servicios</Link>
        </div>

        <div className="col-lg-7">
          <div className="row g-3">
            <div className="col-12">
              <article className="sobre-mini-card">
                <div className="mb-2" style={{ fontSize: '1.8rem' }}>🎯</div>
                <h3>Nuestra misión</h3>
                <p>
                  Conectar a jóvenes universitarios con oportunidades de empleo,
                  orientación vocacional y desarrollo profesional en la región Lambayeque.
                </p>
              </article>
            </div>
            <div className="col-md-6">
              <article className="sobre-mini-card">
                <div className="mb-2" style={{ fontSize: '1.8rem' }}>🌱</div>
                <h4>Inclusión</h4>
                <p>Acceso gratuito para todos los estudiantes, sin distinción de carrera o condición socioeconómica.</p>
              </article>
            </div>
            <div className="col-md-6">
              <article className="sobre-mini-card">
                <div className="mb-2" style={{ fontSize: '1.8rem' }}>🚀</div>
                <h4>Innovación</h4>
                <p>Usamos herramientas digitales modernas para acercar oportunidades reales a los jóvenes.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
