import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
export default function Footer() {
  return (
    <footer>
      <p>Copyright © Jose Garcia 2026. All rights reserved.</p>
      <div aria-label="Redes sociales">
        Síguenos en:
        <a href="#" aria-label="Instagram">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}
