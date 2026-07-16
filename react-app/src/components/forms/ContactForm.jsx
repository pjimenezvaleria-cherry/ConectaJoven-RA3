// components/forms/ContactForm.jsx
// Formulario de contacto de la landing page, con validación en tiempo real
// y gestión de estado mediante hooks (useState, useEffect).
import { useState, useEffect } from 'react';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import TextareaField from '../ui/TextareaField';
import CheckboxField from '../ui/CheckboxField';
import Button from '../ui/Button';
import AlertMessage from '../ui/AlertMessage';
import { validate, validateForm, MAX_MESSAGE_LENGTH } from '../../utils/validators';

const FIELDS = ['name', 'email', 'phone', 'career', 'message', 'terms'];

const CARRERAS = [
  { value: 'sistemas', label: 'Ingeniería de Sistemas' },
  { value: 'civil', label: 'Ingeniería Civil' },
  { value: 'admin', label: 'Administración de Empresas' },
  { value: 'derecho', label: 'Derecho' },
  { value: 'medicina', label: 'Medicina' },
  { value: 'psicologia', label: 'Psicología' },
  { value: 'otra', label: 'Otra carrera' },
];

const SERVICIOS = [
  { value: 'vocacional', label: 'Orientación Vocacional' },
  { value: 'empleo', label: 'Bolsa de Empleo' },
  { value: 'beca', label: 'Becas y Financiamiento' },
  { value: 'cv', label: 'Taller CV y Entrevistas' },
  { value: 'mentor', label: 'Red de Mentores' },
];

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  career: '',
  service: '',
  message: '',
  terms: false,
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  // Oculta el mensaje de éxito automáticamente después de 6 segundos
  useEffect(() => {
    if (alert.type !== 'success') return undefined;
    const timer = setTimeout(() => setAlert({ type: '', message: '' }), 6000);
    return () => clearTimeout(timer);
  }, [alert.type]);

  const handleChange = (field) => (e) => {
    const value = field === 'terms' ? e.target.checked : e.target.value;
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setErrors((prev) => ({ ...prev, [field]: validate(field, value, updated) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData, FIELDS);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setAlert({ type: 'error', message: 'Revisa los campos marcados antes de continuar.' });
      const firstInvalid = Object.keys(newErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setLoading(true);
    setAlert({ type: '', message: '' });
    await new Promise((res) => setTimeout(res, 1200)); // Simula envío (sin backend)
    setLoading(false);
    setAlert({
      type: 'success',
      message: '¡Mensaje enviado! Un orientador se comunicará contigo pronto.',
    });
    setFormData(INITIAL_STATE);
    setErrors({});
  };

  return (
    <div className="form-wrapper">
      <h3 className="mb-4" style={{ fontSize: '1.2rem' }}>
        Envíanos tu consulta
      </h3>

      <AlertMessage type={alert.type} message={alert.message} />

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <InputField
              id="name" label="Nombre completo" required
              placeholder="Tu nombre completo"
              value={formData.name} onChange={handleChange('name')}
              error={errors.name}
            />
          </div>
          <div className="col-md-6">
            <InputField
              id="email" label="Correo electrónico" type="email" required
              placeholder="tu@correo.com"
              value={formData.email} onChange={handleChange('email')}
              error={errors.email} autoComplete="email"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <InputField
              id="phone" label="Teléfono" type="tel" required
              placeholder="9XXXXXXXX"
              value={formData.phone} onChange={handleChange('phone')}
              error={errors.phone} autoComplete="tel"
            />
          </div>
          <div className="col-md-6">
            <SelectField
              id="career" label="Carrera universitaria" required
              placeholder="Selecciona tu carrera" options={CARRERAS}
              value={formData.career} onChange={handleChange('career')}
              error={errors.career}
            />
          </div>
        </div>

        <SelectField
          id="service" label="Servicio de interés"
          placeholder="¿Qué servicio te interesa?" options={SERVICIOS}
          value={formData.service} onChange={handleChange('service')}
          error={errors.service}
        />

        <TextareaField
          id="message" label="¿En qué podemos ayudarte?" required
          placeholder="Cuéntanos tu situación o consulta..." rows={4}
          maxLength={MAX_MESSAGE_LENGTH}
          value={formData.message} onChange={handleChange('message')}
          error={errors.message}
        />

        <CheckboxField
          id="terms"
          label="Acepto los términos y condiciones de ConectaJoven"
          checked={formData.terms} onChange={handleChange('terms')}
          error={errors.terms}
        />

        <Button type="submit" label="Enviar consulta" loading={loading} />
      </form>
    </div>
  );
};

export default ContactForm;
