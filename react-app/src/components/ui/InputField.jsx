// components/ui/InputField.jsx
// Campo de entrada reutilizable con etiqueta, validación visual y soporte ARIA.
import { useState } from 'react';

const InputField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  hint,
  autoComplete,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  const showError = touched && !!error;
  const showValid = touched && !error && value;

  return (
    <div className="form-group mb-3">
      <label htmlFor={id} className="form-label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={`form-control ${showError ? 'is-invalid' : ''} ${showValid ? 'is-valid' : ''}`}
        aria-invalid={showError}
        aria-describedby={
          [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(' ') ||
          undefined
        }
        onChange={onChange}
        onBlur={handleBlur}
      />
      {hint && (
        <small id={`${id}-hint`} className="form-hint">
          {hint}
        </small>
      )}
      {showError && (
        <span id={`${id}-error`} className="error-msg" role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
