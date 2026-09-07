import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Pie de página">
      <p>Copyright © Jose Garcia 2026. All rights reserved.</p>
      <div className="redes" aria-label="Redes sociales">
        Síguenos en:
        <a href="https://www.instagram.com/jose20thebest/" aria-label="Instagram" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://web.facebook.com/j20thebest/" aria-label="Facebook" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}
