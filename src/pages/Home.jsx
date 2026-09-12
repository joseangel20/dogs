import { useLoaderData, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Select from "../components/home/Select";
import Cards from "../components/home/Cards";
import Footer from "../components/Footer";

export default function Home() {
  const { filter, breeds } = useLoaderData();
  const navigation = useNavigation();
  const order = ["ASC", "DESC", "RANDOM"];
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
          <Select text="Razas" propiedad={"q"} values={razas} />
          <Select text="Ordenar" propiedad={"order"} values={order} />
        </section>

        <section className="cards" aria-label="Perros en adopción">
          {navigation.state === "loading" ? (
            <p>Cargando perros...</p>
          ) : filter.length == 0 ? (
            <p>No hay perros para esta raza.</p>
          ) : (
            <Cards dogs={filter} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
