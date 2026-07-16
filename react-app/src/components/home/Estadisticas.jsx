// components/home/Estadisticas.jsx
const CARRERAS_DEMANDA = [
  { n: 1, carrera: 'Ingeniería de Sistemas', demanda: 'alta', salario: 'S/ 3,500 – S/ 6,000', crecimiento: '+18%' },
  { n: 2, carrera: 'Administración de Empresas', demanda: 'alta', salario: 'S/ 2,800 – S/ 5,000', crecimiento: '+12%' },
  { n: 3, carrera: 'Ingeniería Civil', demanda: 'media', salario: 'S/ 3,000 – S/ 5,500', crecimiento: '+9%' },
  { n: 4, carrera: 'Psicología', demanda: 'media', salario: 'S/ 2,000 – S/ 3,800', crecimiento: '+8%' },
  { n: 5, carrera: 'Derecho', demanda: 'media', salario: 'S/ 2,500 – S/ 5,000', crecimiento: '+7%' },
  { n: 6, carrera: 'Medicina Humana', demanda: 'alta', salario: 'S/ 4,000 – S/ 9,000', crecimiento: '+15%' },
];

const Estadisticas = () => (
  <section id="estadisticas">
    <div className="container">
      <span className="cj-tag">Datos del mercado</span>
      <h2 className="section-title">Carreras con mayor demanda laboral</h2>
      <p className="section-sub mb-5">
        Información actualizada sobre el mercado laboral en la región norte del Perú – 2025.
      </p>

      <div className="table-responsive">
        <table className="table cj-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Carrera</th>
              <th scope="col">Demanda</th>
              <th scope="col">Salario promedio</th>
              <th scope="col">Crecimiento anual</th>
            </tr>
          </thead>
          <tbody>
            {CARRERAS_DEMANDA.map((row) => (
              <tr key={row.n}>
                <th scope="row">{row.n}</th>
                <td>{row.carrera}</td>
                <td><span className={`badge-nivel ${row.demanda}`}>{row.demanda === 'alta' ? 'Alta' : 'Media'}</span></td>
                <td>{row.salario}</td>
                <td>{row.crecimiento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-note">Fuente: Ministerio de Trabajo y Promoción del Empleo – Región Lambayeque, 2025.</p>
    </div>
  </section>
);

export default Estadisticas;
