import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Select from "../components/home/Select";
import Cards from "../components/home/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner />

      <main className="main" aria-label="Contenido principal">
        <section className="contentSelects" aria-label="Filtros de búsqueda">
          <Select text="Edad" />
          <Select text="Tamaño" />
          <Select text="Ubicación" />
        </section>

        <section className="cards" aria-label="Perros en adopción">
          <Cards />
        </section>
      </main>
      <Footer />
    </>
  );
}
