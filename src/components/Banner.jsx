import Circulo from "./Circulo";
import banner from "../assets/banner1.png";

export default function Banner() {
  return (
    <section>
      <h1>La adopción perfecta está aquí</h1>
      <img src={banner} alt="Banner - Perros en adopción" />

      <Circulo />
    </section>
  );
}
