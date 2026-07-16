// ============================================
// utils/validators.js
// Reglas de validación centralizadas (RA3)
// Reutilizadas por ContactForm, RegisterForm,
// LoginForm y JobApplicationForm.
// ============================================

export const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
  phone: /^9\d{8}$/,
  name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/,
};

export const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
export const MAX_COVER_LETTER_LENGTH = 500;
export const MAX_MESSAGE_LENGTH = 600;

// Campos que son opcionales en todos los formularios del sitio
const OPTIONAL_FIELDS = ['coverLetter', 'remember', 'service'];

/**
 * Valida un campo individual según su nombre.
 * @param {string} field - nombre del campo (name, email, password, confirmPassword,
 *   phone, career, terms, file, coverLetter, position, message, service...)
 * @param {*} value - valor actual del campo
 * @param {object} allValues - resto de valores del formulario (validaciones cruzadas,
 *   por ejemplo confirmPassword contra password)
 * @returns {string} mensaje de error, o cadena vacía si el campo es válido
 */
export const validate = (field, value, allValues = {}) => {
  if (!OPTIONAL_FIELDS.includes(field)) {
    const isEmpty =
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.trim() === '') ||
      (field === 'file' && !value) ||
      (field === 'terms' && value !== true);

    if (isEmpty) return 'Este campo es obligatorio.';
  }

  switch (field) {
    case 'name':
      return REGEX.name.test(value) ? '' : 'Solo letras y espacios, mínimo 3 caracteres.';

    case 'email':
      return REGEX.email.test(value) ? '' : 'Ingresa un correo electrónico válido.';

    case 'password':
      return REGEX.password.test(value)
        ? ''
        : 'Mínimo 8 caracteres, una mayúscula y un número.';

    case 'confirmPassword':
      return value === allValues.password ? '' : 'Las contraseñas no coinciden.';

    case 'phone':
      return REGEX.phone.test(value)
        ? ''
        : 'Ingresa un celular peruano de 9 dígitos (inicia con 9).';

    case 'career':
    case 'position':
      return value ? '' : 'Selecciona una opción.';

    case 'terms':
      return value === true ? '' : 'Debes aceptar los términos y condiciones.';

    case 'message':
      if (value.trim().length < 10) return 'Tu mensaje debe tener al menos 10 caracteres.';
      if (value.length > MAX_MESSAGE_LENGTH) return `Máximo ${MAX_MESSAGE_LENGTH} caracteres.`;
      return '';

    case 'file': {
      if (!value) return 'Debes adjuntar tu currículum en PDF.';
      if (value.type !== 'application/pdf') return 'Solo se aceptan archivos PDF.';
      if (value.size > MAX_FILE_SIZE) return 'El archivo no debe superar los 2 MB.';
      return '';
    }

    case 'coverLetter':
      return value && value.length > MAX_COVER_LETTER_LENGTH
        ? `Máximo ${MAX_COVER_LETTER_LENGTH} caracteres.`
        : '';

    default:
      return '';
  }
};

/**
 * Valida un objeto completo de formulario.
 * @param {object} formData
 * @param {string[]} fieldsToValidate
 * @returns {object} mapa { campo: mensajeError } solo con errores encontrados
 */
export const validateForm = (formData, fieldsToValidate) => {
  const errors = {};
  fieldsToValidate.forEach((field) => {
    const error = validate(field, formData[field], formData);
    if (error) errors[field] = error;
  });
  return errors;
};
