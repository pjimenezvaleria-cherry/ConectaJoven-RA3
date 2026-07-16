// components/ui/FileUpload.jsx
// Campo de carga de archivos con validación de tipo y tamaño (drag & click).
const FileUpload = ({ id, label, file, onChange, error, accept = 'application/pdf', hint }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={id} className="form-label">
        {label} <span aria-hidden="true">*</span>
      </label>
      <div className="file-upload-box">
        <input
          type="file"
          id={id}
          name={id}
          accept={accept}
          onChange={(e) => onChange(e.target.files[0] || null)}
          className="file-upload-input"
          aria-describedby={`${id}-info ${error ? `${id}-error` : ''}`}
        />
        <label htmlFor={id} className="file-upload-label">
          <span>📎 Arrastra tu archivo aquí o haz clic para seleccionar</span>
        </label>
      </div>
      {hint && (
        <small id={`${id}-info`} className="form-hint">
          {hint}
        </small>
      )}
      {file && !error && (
        <div className="file-upload-filename">
          ✓ {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
        </div>
      )}
      {error && (
        <span id={`${id}-error`} className="error-msg" role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
};

export default FileUpload;
