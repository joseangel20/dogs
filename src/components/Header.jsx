import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Logo - manos sosteniendo un perro con un corazón"
      />
      <nav>
        <a href="#">Home</a>
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
}
