// components/ui/CharCounter.jsx
// Contador de caracteres reutilizable para textarea.
const CharCounter = ({ current, max }) => {
  const isNearLimit = current >= max;
  return (
    <small className="form-hint" style={{ color: isNearLimit ? '#ff6b6b' : undefined }}>
      {current} / {max} caracteres
    </small>
  );
};

export default CharCounter;
