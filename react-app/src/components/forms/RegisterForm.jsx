// components/forms/RegisterForm.jsx
// Formulario de Registro de Usuario con validación en tiempo real y gestión de estado.
import { useState } from 'react';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import CheckboxField from '../ui/CheckboxField';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { validate, validateForm } from '../../utils/validators';

const FIELDS = ['name', 'email', 'password', 'confirmPassword', 'phone', 'career', 'terms'];

const CARRERAS = [
  { value: 'sistemas', label: 'Ingeniería de Sistemas' },
  { value: 'civil', label: 'Ingeniería Civil' },
  { value: 'admin', label: 'Administración de Empresas' },
  { value: 'derecho', label: 'Derecho' },
  { value: 'medicina', label: 'Medicina' },
  { value: 'psicologia', label: 'Psicología' },
  { value: 'otra', label: 'Otra carrera' },
];

const INITIAL_STATE = {
  name: '', email: '', password: '', confirmPassword: '', phone: '', career: '', terms: false,
};

const RegisterForm = ({ onGoToLogin }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      const firstInvalid = Object.keys(newErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000)); // Simula envío (sin backend)
    setLoading(false);
    setShowModal(true);
    setFormData(INITIAL_STATE);
    setErrors({});
  };

  return (
    <div className="form-wrapper">
      <span className="cj-tag">Únete a ConectaJoven</span>
      <h1 className="section-title mb-2" style={{ fontSize: '1.8rem' }}>Crea tu cuenta</h1>
      <p className="section-sub mb-4">
        Regístrate para acceder a orientación vocacional, bolsa de empleo y becas.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <InputField
              id="name" label="Nombre completo" required
              placeholder="Ej. Xiomara Nayeli De La Cruz"
              value={formData.name} onChange={handleChange('name')}
              error={errors.name} autoComplete="name"
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
              id="password" label="Contraseña" type="password" required
              value={formData.password} onChange={handleChange('password')}
              error={errors.password} hint="Mínimo 8 caracteres, una mayúscula y un número."
              autoComplete="new-password"
            />
          </div>
          <div className="col-md-6">
            <InputField
              id="confirmPassword" label="Confirmar contraseña" type="password" required
              value={formData.confirmPassword} onChange={handleChange('confirmPassword')}
              error={errors.confirmPassword} autoComplete="new-password"
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

        <CheckboxField
          id="terms"
          label="Acepto los términos y condiciones de ConectaJoven"
          checked={formData.terms} onChange={handleChange('terms')}
          error={errors.terms}
        />

        <Button type="submit" label="Crear cuenta" loading={loading} />

        <p className="text-center mt-3" style={{ fontSize: '0.9rem', color: 'var(--cj-muted)' }}>
          ¿Ya tienes cuenta?{' '}
          <button
            type="button"
            onClick={onGoToLogin}
            style={{ background: 'none', border: 'none', color: 'var(--cj-accent)', cursor: 'pointer', padding: 0 }}
          >
            Inicia sesión
          </button>
        </p>
      </form>

      <Modal
        isOpen={showModal}
        title="¡Registro exitoso! ✓"
        onClose={() => {
          setShowModal(false);
          if (onGoToLogin) onGoToLogin();
        }}
      >
        <p>Tu cuenta ha sido creada correctamente. Ya puedes iniciar sesión en ConectaJoven.</p>
      </Modal>
    </div>
  );
};

export default RegisterForm;
