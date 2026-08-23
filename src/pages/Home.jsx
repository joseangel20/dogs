import Header from "../components/Header";
import Banner from "../components/Banner";
import Select from "../components/Select";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <main>
        <section>
          <Select text="Edad" />
          <Select text="Tamaño" />
          <Select text="Ubicación" />
        </section>

        <section>
          <Cards />
        </section>
      </main>
      <Footer />
    </>
  );
}
