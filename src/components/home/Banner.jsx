import Circulo from "./Circulo";
import banner from "../../assets/banner1.png";

export default function Banner() {
  return (
    <section className="banner" aria-label="Banner de la página principal">
      <h1>La adopción perfecta está aquí</h1>
      <img className="banner__image" src={banner} alt="Banner - Perros en adopción" />

      <Circulo />
    </section>
  );
}
