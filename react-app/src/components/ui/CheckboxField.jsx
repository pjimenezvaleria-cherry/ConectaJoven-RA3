// components/ui/CheckboxField.jsx
// Casilla de verificación reutilizable (usada para "Acepto términos", "Recordarme"...).
import { useState } from 'react';

const CheckboxField = ({ id, label, checked, onChange, onBlur, error, showValidation = true }) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  const showError = showValidation && touched && !!error;

  return (
    <div className="form-group mb-3">
      <div className="form-check">
        <input
          className={`form-check-input ${showError ? 'is-invalid' : ''}`}
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={onChange}
          onBlur={handleBlur}
          aria-invalid={showError}
          aria-describedby={showError ? `${id}-error` : undefined}
        />
        <label
          className="form-check-label"
          htmlFor={id}
          style={{ fontSize: '0.85rem', color: 'var(--cj-muted)' }}
        >
          {label}
        </label>
      </div>
      {showError && (
        <span id={`${id}-error`} className="error-msg" role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
};

export default CheckboxField;
