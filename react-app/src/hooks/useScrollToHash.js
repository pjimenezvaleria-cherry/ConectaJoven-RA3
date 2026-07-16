// hooks/useScrollToHash.js
// Cuando la URL cambia y tiene un "#ancla" (ej. /#servicios), hace scroll
// suave hasta ese elemento una vez que la página terminó de renderizar.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Sin ancla: al cambiar de página, sube al inicio
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      return;
    }

    const id = hash.replace('#', '');
    // Se espera un tick para que el DOM de la nueva página ya esté montado
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);

    return () => clearTimeout(timer);
  }, [hash, pathname]);
}
