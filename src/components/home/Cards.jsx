import Card from "./Card";
export default function Cards({ dogs }) {
  return (
    <>
      {dogs.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          temperament={dog.temperament}
          src={dog.image?.url}
        />
      ))}
    </>
  );
}
