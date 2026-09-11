import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Select from "../components/home/Select";
import Cards from "../components/home/Cards";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const { dogs, breeds } = useLoaderData();
  const razas = [];
  for (const breed in breeds) {
    razas.push(breed);
  }
  return (
    <>
      <Header />
      <Banner />

      <main className="main" aria-label="Contenido principal">
        <section className="contentSelects" aria-label="Filtros de búsqueda">
          <Select values={razas} text="Raza" />
          <Select values={razas} text="Tamaño" />
          <Select values={razas} text="Ubicación" />
        </section>

        <section className="cards" aria-label="Perros en adopción">
          <Cards dogs={dogs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
