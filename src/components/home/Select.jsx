import { useSearchParams } from "react-router-dom";

export default function Select({ text, propiedad, values }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  function handleFilter(event) {
    const select = event.currentTarget.value;
    const nextSearchParams = new URLSearchParams(searchParams);

    if (select) {
      nextSearchParams.set(propiedad, select);
    } else {
      nextSearchParams.delete(propiedad);
    }

    setSearchParams(nextSearchParams);
  }

  return (
    <div className="select" role="group" aria-label={`Seleccionar ${text}`}>
      <label htmlFor={text}>{text}:</label>

      <select value={searchParams.get(propiedad) || ""} onChange={handleFilter}>
        <option value="">Seleccionar</option>

        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
