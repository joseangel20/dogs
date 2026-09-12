import { useLoaderData, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Select from "../components/home/Select";
import Cards from "../components/home/Cards";
import Footer from "../components/Footer";

export default function Home() {
  const { filter, breeds } = useLoaderData();
  const navigation = useNavigation();

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
          <Select
            name="razas"
            values={razas}
            text="razas"
          />
          <Select
            name="edad"
            values={razas}
            text="Tamaño"
          />
          <Select
            name="origen"
            values={razas}
            text="Ubicación"
          />
        </section>

        <section className="cards" aria-label="Perros en adopción">
          {navigation.state === "loading" ? (
            <p>Cargando perros...</p>
          ) : (
            <Cards dogs={filter} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
