export default function Card({ ruta, alt, titulo, descripcion }) {
  return (
    <div className="card">
      <img src={ruta} alt={alt} />
      <div className="textCard" >
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
      <button>Ver perfil</button>
    </div>
  );
}
