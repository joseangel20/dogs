import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
export default function Header() {
  return (
    <header className="site-header">
      <img
        className="site-header__logo"
        src={logo}
        alt="Logo - manos sosteniendo un perro con un corazón"
      />
      <nav className="site-header__nav" aria-label="Navegación principal">

        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
