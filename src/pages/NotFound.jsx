import { Link } from "react-router";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container not-found-page">
      <h1>404</h1>
      <p>Sorry, that page could not be found.</p>
      <Link to="/" className="primary-button">Back to Home</Link>
    </div>
  );
}
