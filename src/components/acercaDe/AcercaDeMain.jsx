import Pilares from "./Pilares";

const pilaresData = [
  {
    title: "Responsabilidad",
    description:
      "Nos aseguramos de que cada hogar sea seguro y apto para recibir un animal.",
  },
  {
    title: "Salud Animal",
    description:
      "Todas nuestras mascotas se entregan vacunadas, desparasitadas y esterilizadas.",
  },
  {
    title: "Comunidad",
    description:
      "Apoyamos a refugios locales facilitándoles una plataforma para dar visibilidad a sus animales.",
  },
];

export default function AcercaDeMain() {
  return (
    <main>
      <article>
        <h2>Quiénes somos</h2>
        <section>
          <h3>Misión:</h3>
          <p>
            Nuestra misión es conectar a mascotas en situación de vulnerabilidad
            con familias responsables y amorosas, transformando vidas a través
            de la adopción consciente y el bienestar animal.
          </p>
        </section>
      </article>

      <article>
        <h2>Nuestros Pilares</h2>
        <Pilares pilaresData={pilaresData} />
      </article>
    </main>
  );
}
