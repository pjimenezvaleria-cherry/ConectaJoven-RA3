// components/ui/AlertMessage.jsx
// Mensaje de alerta accesible (éxito / error / info) con región viva ARIA.
const AlertMessage = ({ type = 'info', message }) => {
  if (!message) return null;

  const typeClass = {
    success: 'alert-success',
    error: 'alert-error',
    info: 'alert-info',
  }[type] || 'alert-info';

  return (
    <div className={`alert-msg ${typeClass}`} role="alert" aria-live="polite">
      {message}
    </div>
  );
};

export default AlertMessage;
