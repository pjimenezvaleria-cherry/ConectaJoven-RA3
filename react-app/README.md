# ConectaJoven – Proyecto React (RA3)

Proyecto en React (con Vite + React Router) que reemplaza la versión
de páginas estáticas por una sola aplicación: la landing page original y los
formularios de Registro, Inicio de sesión y Postulación, todos con
validación en tiempo real y gestión de estado.

Mantiene exactamente el mismo diseño, paleta de colores e imágenes del
proyecto original.

## Requisitos
- Node.js 20.x LTS o superior
- npm 10+

## Instalación y ejecución 
```bash
cd react-app
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Rutas de la aplicación

|---------------|----------------------------------------------------------------------------|
| Ruta          | Página                                                                     |
|---------------|----------------------------------------------------------------------------|
| `/`           | Landing page (hero, nosotros, servicios, estadísticas, recursos, contacto) |
| `/login`      | Inicio de sesión                                                           |
| `/registro`   | Crear cuenta                                                               |
| `/postulacion`| Postulación a una oportunidad laboral (con carga de CV)                    |
|---------------|----------------------------------------------------------------------------|

## Estructura

```
react-app/
├── public/
│   └── img/              -> Imágenes originales del proyecto
├── src/
│   ├── components/
│   │   ├── layout/       -> Navbar, Footer
│   │   ├── home/         -> Hero, Sobre, Servicios, Estadisticas, Recursos, Contacto
│   │   ├── ui/           -> InputField, SelectField, TextareaField, CheckboxField,
│   │   │                    Button, AlertMessage, Modal, CharCounter, FileUpload
│   │   └── forms/        -> ContactForm, RegisterForm, LoginForm, JobApplicationForm
│   ├── hooks/            -> useNavbarScroll, useRevealOnScroll, useScrollToHash
│   ├── pages/            -> HomePage, LoginPage, RegisterPage, PostulacionPage
│   ├── utils/
│   │   └── validators.js -> Reglas de validación centralizadas y reutilizadas
│   │                         por los 4 formularios
│   ├── App.jsx           -> Definición de rutas (react-router-dom)
│   ├── main.jsx          -> Punto de entrada
│   └── index.css         -> Estilos (styles.css + forms.css originales)
├── index.html
├── vite.config.js
└── package.json
```

## Validaciones implementadas

- Contacto: nombre, correo, teléfono, carrera, mensaje (10–600 caracteres) y
  términos y condiciones.
- Registro: nombre, correo, contraseña (8+ caracteres, mayúscula y número),
  confirmación de contraseña, teléfono, carrera y términos y condiciones.
- Inicio de sesión: correo y contraseña.
- Postulación: nombre, correo, teléfono, puesto y CV en PDF (máx. 2 MB),
  con contador de caracteres para la carta de presentación (opcional).
