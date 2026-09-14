export default function Pilares({ pilaresData }) {
  return pilaresData.map(({ title, description }) => (
    <section className="pilar-item" key={title}>
      <h3>{title}:</h3>
      <p>{description}</p>
    </section>
  ));
}