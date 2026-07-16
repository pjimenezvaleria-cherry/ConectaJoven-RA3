// hooks/useRevealOnScroll.js
// Observa los elementos que coincidan con "selector" y les agrega la clase
// "is-visible" apenas entran en pantalla, para dar dinamismo a la página
// (tarjetas de servicios, recursos, estadísticas, etc.).
import { useEffect } from 'react';

export default function useRevealOnScroll(selector, deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return undefined;

    elements.forEach((el) => el.classList.add('reveal-on-scroll'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 6) * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
