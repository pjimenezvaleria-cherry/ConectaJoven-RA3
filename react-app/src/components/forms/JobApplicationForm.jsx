// components/forms/JobApplicationForm.jsx
// Formulario de Postulación a empleo: incluye carga de archivo (CV) y contador
// de caracteres para la carta de presentación, gestionados con useState/useEffect.
import { useState, useEffect } from 'react';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import Button from '../ui/Button';
import AlertMessage from '../ui/AlertMessage';
import CharCounter from '../ui/CharCounter';
import FileUpload from '../ui/FileUpload';
import { validate, validateForm, MAX_COVER_LETTER_LENGTH } from '../../utils/validators';

const FIELDS = ['name', 'email', 'phone', 'position', 'file'];

const PUESTOS = [
  { value: 'practicante-ti', label: 'Practicante de TI' },
  { value: 'analista-datos', label: 'Analista de Datos Junior' },
  { value: 'asistente-marketing', label: 'Asistente de Marketing' },
  { value: 'soporte-admin', label: 'Soporte Administrativo' },
];

const INITIAL_STATE = {
  name: '', email: '', phone: '', position: '', coverLetter: '', file: null,
};

const JobApplicationForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  // Revalida la carta de presentación cada vez que cambia su longitud
  useEffect(() => {
    const error = validate('coverLetter', formData.coverLetter);
    setErrors((prev) => ({ ...prev, coverLetter: error }));
  }, [formData.coverLetter]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field !== 'coverLetter') {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({ ...prev, file }));
    setErrors((prev) => ({ ...prev, file: validate('file', file) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData, FIELDS);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstInvalid = Object.keys(newErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setLoading(true);
    setAlert({ type: '', message: '' });
    await new Promise((res) => setTimeout(res, 1000)); // Simula envío (sin backend)
    setLoading(false);
    setAlert({ type: 'success', message: '¡Postulación enviada con éxito! Te contactaremos pronto.' });
    setFormData(INITIAL_STATE);
    setErrors({});
  };

  return (
    <div className="form-wrapper">
      <span className="cj-tag">Bolsa de Empleo</span>
      <h1 className="section-title mb-2" style={{ fontSize: '1.8rem' }}>Postula a una oportunidad</h1>
      <p className="section-sub mb-4">Completa tus datos y adjunta tu CV en formato PDF (máx. 2 MB).</p>

      <AlertMessage type={alert.type} message={alert.message} />

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <InputField
              id="name" label="Nombre completo" required
              value={formData.name} onChange={handleChange('name')}
              error={errors.name}
            />
          </div>
          <div className="col-md-6">
            <InputField
              id="email" label="Correo electrónico" type="email" required
              value={formData.email} onChange={handleChange('email')}
              error={errors.email} autoComplete="email"
            />
          </div>
        </div>

        <InputField
          id="phone" label="Teléfono" type="tel" required
          placeholder="9XXXXXXXX"
          value={formData.phone} onChange={handleChange('phone')}
          error={errors.phone} autoComplete="tel"
        />

        <SelectField
          id="position" label="Puesto de interés" required
          placeholder="Selecciona un puesto" options={PUESTOS}
          value={formData.position} onChange={handleChange('position')}
          error={errors.position}
        />

        <div className="form-group mb-3">
          <label htmlFor="coverLetter" className="form-label">Carta de presentación (opcional)</label>
          <textarea
            id="coverLetter" rows={4} maxLength={MAX_COVER_LETTER_LENGTH}
            className="form-control" value={formData.coverLetter}
            onChange={handleChange('coverLetter')}
          />
          <CharCounter current={formData.coverLetter.length} max={MAX_COVER_LETTER_LENGTH} />
        </div>

        <FileUpload
          id="cv" label="Currículum Vitae (PDF)"
          file={formData.file} onChange={handleFileChange}
          error={errors.file} hint="Solo archivos PDF, tamaño máximo 2 MB."
        />

        <Button type="submit" label="Enviar postulación" loading={loading} />
      </form>
    </div>
  );
};

export default JobApplicationForm;
