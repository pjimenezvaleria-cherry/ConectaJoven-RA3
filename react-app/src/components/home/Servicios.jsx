// components/home/Servicios.jsx
import { Link } from 'react-router-dom';

const SERVICIOS = [
  {
    icon: '🧭',
    title: 'Orientación Vocacional',
    text: 'Sesiones con especialistas para identificar tus fortalezas y elegir el camino profesional ideal según tu perfil.',
    linkTo: '/#contacto',
    linkLabel: 'Solicitar →',
  },
  {
    icon: '💼',
    title: 'Bolsa de Empleo',
    text: 'Ofertas laborales reales de empresas de Lambayeque y a nivel nacional, filtradas por carrera y nivel de experiencia.',
    linkTo: '/postulacion',
    linkLabel: 'Ver ofertas →',
  },
  {
    icon: '🎓',
    title: 'Becas y Financiamiento',
    text: 'Información actualizada sobre becas, programas de financiamiento y oportunidades de estudio en el extranjero.',
    linkTo: '/#contacto',
    linkLabel: 'Explorar →',
  },
  {
    icon: '📋',
    title: 'Taller CV y Entrevistas',
    text: 'Aprende a redactar un CV impactante y prepárate para entrevistas laborales con expertos en Recursos Humanos.',
    linkTo: '/#contacto',
    linkLabel: 'Inscribirme →',
  },
  {
    icon: '🤝',
    title: 'Red de Mentores',
    text: 'Conecta con profesionales exitosos de tu carrera que comparten su experiencia y te guían en tu desarrollo.',
    linkTo: '/#contacto',
    linkLabel: 'Conocer mentores →',
  },
  {
    icon: '📊',
    title: 'Análisis Laboral',
    text: 'Reportes sobre carreras con mayor demanda y salarios del mercado en el norte del Perú actualizados mensualmente.',
    linkTo: '/#estadisticas',
    linkLabel: 'Ver estadísticas →',
  },
];

const Servicios = () => (
  <section id="servicios">
    <div className="container">
      <span className="cj-tag">Lo que ofrecemos</span>
      <h2 className="section-title">Nuestros servicios</h2>
      <p className="section-sub mb-5">Todo lo que necesitas para dar el siguiente paso en tu carrera profesional.</p>

      <div className="row g-4">
        {SERVICIOS.map((servicio) => (
          <div className="col-md-6 col-lg-4" key={servicio.title}>
            <article className="card cj-card h-100 p-1">
              <div className="card-body p-4">
                <div className="service-icon">{servicio.icon}</div>
                <h5 className="card-title">{servicio.title}</h5>
                <p className="card-text">{servicio.text}</p>
                <Link to={servicio.linkTo} className="recurso-link">{servicio.linkLabel}</Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;
