// components/ui/TextareaField.jsx
// Textarea reutilizable con contador de caracteres integrado.
import { useState } from 'react';
import CharCounter from './CharCounter';

const TextareaField = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  rows = 4,
  maxLength,
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
      <textarea
        id={id}
        name={id}
        rows={rows}
        maxLength={maxLength}
        className={`form-control ${showError ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        aria-invalid={showError}
        aria-describedby={showError ? `${id}-error` : undefined}
      />
      {Boolean(maxLength) && <CharCounter current={value.length} max={maxLength} />}
      {showError && (
        <span id={`${id}-error`} className="error-msg" role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextareaField;
