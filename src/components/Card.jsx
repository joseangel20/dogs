export default function Card({ ruta, alt, titulo, descripcion }) {
  return (
    <div className="card">
      <img src={ruta} alt={alt} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button>Ver perfil</button>
    </div>
  );
}
