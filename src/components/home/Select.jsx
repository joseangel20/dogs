export default function Select({ text, values }) {
  return (
    <div className="select" role="group" aria-label={`Seleccionar ${text}`}>
      <label htmlFor={text}>{text}:</label>

      <select id={text}>
        <option value="Seleccionar">Seleccionar</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}