export default function Select({text}) {
  return (
    <>
      <label>
        {text}:
        <select>
          <option value="Seleccionar">Seleccionar</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
    </>
  );
}
