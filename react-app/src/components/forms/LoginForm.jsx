// components/forms/LoginForm.jsx
// Formulario de Inicio de Sesión con validación y simulación de autenticación.
import { useState } from 'react';
import InputField from '../ui/InputField';
import CheckboxField from '../ui/CheckboxField';
import Button from '../ui/Button';
import AlertMessage from '../ui/AlertMessage';
import { validate, validateForm } from '../../utils/validators';

const FIELDS = ['email', 'password'];

const LoginForm = ({ onGoToRegister, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (field) => (e) => {
    const value = field === 'remember' ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field !== 'remember') {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
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
    await new Promise((res) => setTimeout(res, 900)); // Simula autenticación (sin backend)
    setLoading(false);
    setAlert({
      type: 'success',
      message: 'Inicio de sesión simulado correctamente. ¡Bienvenido(a) a ConectaJoven!',
    });
    setFormData({ email: '', password: '', remember: false });

    // Redirige al inicio después de mostrar el mensaje de éxito
    setTimeout(() => {
      if (onLoginSuccess) onLoginSuccess();
    }, 1600);
  };

  return (
    <div className="form-wrapper">
      <span className="cj-tag">Bienvenido de nuevo</span>
      <h1 className="section-title mb-2" style={{ fontSize: '1.8rem' }}>Inicia sesión</h1>
      <p className="section-sub mb-4">Accede a tu cuenta de ConectaJoven.</p>

      <AlertMessage type={alert.type} message={alert.message} />

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="email" label="Correo electrónico" type="email" required
          placeholder="tu@correo.com"
          value={formData.email} onChange={handleChange('email')}
          error={errors.email} autoComplete="email"
        />
        <InputField
          id="password" label="Contraseña" type="password" required
          placeholder="Tu contraseña"
          value={formData.password} onChange={handleChange('password')}
          error={errors.password} autoComplete="current-password"
        />

        <CheckboxField
          id="remember"
          label="Recordarme en este dispositivo"
          checked={formData.remember} onChange={handleChange('remember')}
          showValidation={false}
        />

        <Button type="submit" label="Iniciar sesión" loading={loading} />

        <p className="text-center mt-3" style={{ fontSize: '0.9rem', color: 'var(--cj-muted)' }}>
          ¿No tienes cuenta?{' '}
          <button
            type="button"
            onClick={onGoToRegister}
            style={{ background: 'none', border: 'none', color: 'var(--cj-accent)', cursor: 'pointer', padding: 0 }}
          >
            Regístrate aquí
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
