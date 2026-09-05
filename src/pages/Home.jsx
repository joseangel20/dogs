import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Select from "../components/home/Select";
import Cards from "../components/home/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <main>
        <section className="filters" aria-label="Filtrar perros">
          <Select text="Edad" />
          <Select text="Tamaño" />
          <Select text="Ubicación" />
        </section>

        <section className="dogs-section" aria-label="Perros en adopción">
          <Cards />
        </section>
      </main>
      <Footer />
    </>
  );
}
