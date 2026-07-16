// pages/HomePage.jsx
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Sobre from '../components/home/Sobre';
import Servicios from '../components/home/Servicios';
import Estadisticas from '../components/home/Estadisticas';
import Recursos from '../components/home/Recursos';
import Contacto from '../components/home/Contacto';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const HomePage = () => {
  // Anima con "fade in" las tarjetas al entrar en pantalla (dinamismo)
  useRevealOnScroll('.cj-card, .sobre-mini-card, .stat-card');

  return (
    <>
      <Navbar variant="home" />
      <main>
        <Hero />
        <Sobre />
        <Servicios />
        <Estadisticas />
        <Recursos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
