// hooks/useNavbarScroll.js
// Agrega la clase "scrolled" al navbar cuando el usuario baja más de 40px,
// para darle un fondo sólido (dinamismo, JS nativo con evento "scroll").
import { useEffect, useState } from 'react';

export default function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}
