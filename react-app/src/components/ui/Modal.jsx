// components/ui/Modal.jsx
// Modal accesible (role="dialog", aria-modal, retiene el foco, cierre con Escape).
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, title, children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    modalRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cj-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="cj-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex={-1}
      >
        <h3 id="modal-title">{title}</h3>
        <div>{children}</div>
        <div className="d-flex justify-content-end mt-3">
          <button type="button" className="btn btn-cj" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
