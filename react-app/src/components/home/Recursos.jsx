// components/home/Recursos.jsx
const RECURSOS = [
  {
    logo: '/img/logo-coursera.png',
    alt: 'Logo de Coursera – plataforma de cursos en línea',
    title: 'Coursera',
    text: 'Cursos de universidades de clase mundial.',
    url: 'https://www.coursera.org',
  },
  {
    logo: '/img/logo-edx.png',
    alt: 'Logo de edX – plataforma de educación en línea',
    title: 'edX',
    text: 'Certificaciones en tecnología y negocios.',
    url: 'https://www.edx.org',
  },
  {
    logo: '/img/logo-linkedin.png',
    alt: 'Logo de LinkedIn Learning – plataforma de aprendizaje profesional',
    title: 'LinkedIn Learning',
    text: 'Habilidades profesionales certificadas.',
    url: 'https://www.linkedin.com/learning',
  },
  {
    logo: '/img/logo-khanacademy.png',
    alt: 'Logo de Khan Academy – plataforma de aprendizaje gratuito',
    title: 'Khan Academy',
    text: 'Aprendizaje gratuito en múltiples áreas.',
    url: 'https://es.khanacademy.org',
  },
];

const Recursos = () => (
  <section id="recursos">
    <div className="container">
      <span className="cj-tag">Aprende más</span>
      <h2 className="section-title">Plataformas recomendadas</h2>
      <p className="section-sub mb-5">Recursos educativos digitales para potenciar tu formación profesional.</p>

      <div className="row g-4">
        {RECURSOS.map((r) => (
          <div className="col-6 col-lg-3" key={r.title}>
            <article className="card cj-card recurso-card-anim text-center h-100 p-1">
              <div className="card-body p-4">
                <img
                  src={r.logo} alt={r.alt} className="img-fluid mb-3"
                  style={{ height: '48px', objectFit: 'contain' }}
                />
                <h6 className="card-title">{r.title}</h6>
                <p className="card-text mb-3">{r.text}</p>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="recurso-link">
                  Visitar →
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Recursos;
