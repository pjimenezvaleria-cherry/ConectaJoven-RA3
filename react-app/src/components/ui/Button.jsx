// components/ui/Button.jsx
// Botón configurable (primary, outline, secondary) con estado de carga.
const Button = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  variant = 'primary',
  fullWidth = true,
}) => {
  const variantClass = {
    primary: 'btn-cj',
    outline: 'btn-cj-outline',
    secondary: 'btn-cj-secondary',
  }[variant] || 'btn-cj';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`btn ${variantClass} ${fullWidth ? 'w-100' : ''}`}
    >
      {loading ? 'Procesando...' : label}
    </button>
  );
};

export default Button;
