import { useSearchParams } from "react-router-dom";

export default function Select({ name, text, values }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(event) {
    if (name === "razas") {
      const breed = event.currentTarget.value;
      setSearchParams(breed ? { q: breed } : {});
    }
  }

  return (
    <div className="select" role="group" aria-label={`Seleccionar ${text}`}>
      <label htmlFor={text}>{text}:</label>

      <select value={searchParams.get("q") || ""} onChange={handleFilter}>
        <option value="">Seleccionar</option>
        <option value="">Todas las razas</option>

        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
