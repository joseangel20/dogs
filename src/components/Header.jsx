import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className="site-header">
      <img
        className="site-header__logo"
        src={logo}
        alt="Logo - manos sosteniendo un perro con un corazón"
      />
      <nav className="site-header__nav" aria-label="Navegación principal">
        {/* <a href="/">Home</a>
        <a href="/acerca">Acerca de</a>
        <a href="/contacto">Contacto</a> */}

        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
