export default function Select({ text }) {
  return (
    <div role ="group" aria-label={`Seleccionar ${text}`} className="select">
      <label htmlFor={text}>{text}:</label>

      <select id={text}>
        <option value="Seleccionar">Seleccionar</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}
