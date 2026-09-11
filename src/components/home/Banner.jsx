import Circulo from "./Circulo";
import { useState, useEffect } from 'react';
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
const imagenes = [
  banner1,
  banner2
];

export default function Banner() {
  const [indiceActual, setIndiceActual] = useState(0);

   useEffect(() => {
    // Configura el cambio automático cada 3 segundos
    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 3000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="banner" aria-label="Banner de la página principal">
      <h1>La adopción perfecta está aquí</h1>
      <img className="banner__image" src={imagenes[indiceActual]} alt="Banner - Perros en adopción" />
      <Circulo />
    </section>
  );
}
