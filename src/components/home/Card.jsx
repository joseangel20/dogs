export default function Card({ id, name, temperament, src }) {
  return (
    <div className="card">
      <img src={src} alt={`${id} ${name}`} />
      <div className="textCard">
        <h2>{name.split(" ")[0]}</h2>
        <p>{temperament.length > 50? `${temperament.substring(0,50)}...`:temperament}</p>
      </div>
      <button>Ver perfil</button>
    </div>
  );
}
