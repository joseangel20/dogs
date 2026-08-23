export default function Card({ ruta, alt, titulo, descripcion }) {
  return (
    <div className="card">
      <img src={ruta} alt={alt} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button>Ver perfil</button>
    </div>
  );
}
