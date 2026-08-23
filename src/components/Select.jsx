export default function Select({ text }) {
  return (
    <>
      <label htmlFor={text}>{text}:</label>

      <select id={text}>
        <option value="Seleccionar">Seleccionar</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
}
