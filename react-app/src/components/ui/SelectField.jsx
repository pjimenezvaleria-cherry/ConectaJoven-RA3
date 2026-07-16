// components/ui/SelectField.jsx
// Select reutilizable con validación visual y soporte ARIA.
import { useState } from 'react';

const SelectField = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder = 'Selecciona una opción',
  error,
  required = false,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  const showError = touched && !!error;

  return (
    <div className="form-group mb-3">
      <label htmlFor={id} className="form-label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        name={id}
        className={`form-select ${showError ? 'is-invalid' : ''}`}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        aria-invalid={showError}
        aria-describedby={showError ? `${id}-error` : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {showError && (
        <span id={`${id}-error`} className="error-msg" role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
};

export default SelectField;
