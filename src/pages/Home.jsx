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
