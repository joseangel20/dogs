import { useState, useEffect } from "react";
import Circulo from "./Circulo";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
const imagenes = [banner1, banner2, banner3];

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
      <img
        className="banner__image"
        src={imagenes[indiceActual]}
        alt="Banner - Perros en adopción"
        width={988}
        height={388}
      />
      <Circulo indiceActual={indiceActual} setIndiceActual={setIndiceActual} imagenes={imagenes}/>
    </section>
  );
}
