export default function FormularioContacto() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Contáctanos aquí</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" required />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" required />
        </label>
        <label>
          Dirección:
          <input type="text" name="dirección" />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Contactar</button>
      </form>
    </div>
  );
}
