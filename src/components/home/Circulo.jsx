export default function Circulo({ indiceActual, setIndiceActual, imagenes }) {
  function handleBanner(index) {
    setIndiceActual(index);
  }

  return (
    <div
      className="groupButton"
      role="group"
      aria-label="Navegación del banner"
    >
      {imagenes.map((image, index) => {
        return (
          <button
            key={index}
            type="button"
            name={index}
            aria-label={`Mostrar banner ${index + 1}`}
            className={indiceActual == index ? "actual" : ""}
            onClick={() => handleBanner(index)}
          ></button>
        );
      })}
    </div>
  );
}

// <button
//   type="button"
//   name={0}
//   aria-label="Mostrar banner 1"
//   className={indiceActual == 0 ? "actual" : ""}
//   onClick={handleBanner}
// ></button>
// <button
//   type="button"
//   name={1}
//   aria-label="Mostrar banner 2"
//   className={indiceActual == 1 ? "actual" : ""}
//   onClick={handleBanner}
// ></button>
// <button
//   type="button"
//   name={2}
//   aria-label="Mostrar banner 3"
//   className={indiceActual == 2 ? "actual" : ""}
//   onClick={handleBanner}
// ></button>
