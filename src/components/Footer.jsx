import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-brand">Randmo</Link>
        <p>Simple random tools for decisions, games and creativity.</p>
      </div>
    </footer>
  );
}
