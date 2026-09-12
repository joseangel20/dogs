import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "#cc0000" }}>
      <h1>¡Ups! Algo salió mal 💥</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>

      {/* Mostramos el texto del error o el estado (ej. 404 o 500) */}
      <p style={{ fontStyle: "italic", color: "#555" }}>
        {error.statusText || error.message}
      </p>

      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver al Inicio
      </Link>
    </div>
  );
}
