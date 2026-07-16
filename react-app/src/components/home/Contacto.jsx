// components/home/Contacto.jsx
import ContactForm from '../forms/ContactForm';

const Contacto = () => (
  <section id="contacto">
    <div className="container">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5">
          <span className="cj-tag">Contáctanos</span>
          <h2 className="section-title">¿Listo para dar el siguiente paso?</h2>
          <p className="section-sub mb-4">
            Completa el formulario y un orientador se comunicará contigo en menos de 48 horas.
          </p>

          <div className="info-item"><span>📍</span><span>Chiclayo, Lambayeque, Perú</span></div>
          <div className="info-item"><span>📧</span><span>contacto@conectajoven.pe</span></div>
          <div className="info-item"><span>📞</span><span>+51 953 233 879</span></div>
          <div className="info-item"><span>🕐</span><span>Lunes a Viernes, 8:00 am – 6:00 pm</span></div>

          <img
            src="/img/contacto-orientacion.jpg"
            alt="Persona usando laptop para recibir orientación vocacional en línea"
            className="img-fluid rounded mt-4"
            style={{ maxHeight: '180px', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="col-lg-7">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contacto;
