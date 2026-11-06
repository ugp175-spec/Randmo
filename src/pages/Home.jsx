import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { tools } from "../data/tools";
import ToolCard from "../components/ToolCard";
import "./Home.css";

export default function Home() {
  const featured = tools.slice(0, 4);
  return (
    <div className="container home-page">
      <section className="home-intro">
        <p className="eyebrow">WELCOME TO RANDMO</p>
        <h1>Let's make it random!</h1>
        <p>Simple tools for decisions, games, learning and creativity.</p>
        <Link to="/explore" className="primary-button">Explore all tools <ArrowRight size={17} /></Link>
      </section>
      <section className="page-section">
        <div className="section-title">
          <div><h2>Popular tools</h2><p>Try one of these to get started.</p></div>
          <Link to="/explore">View all tools →</Link>
        </div>
        <div className="tool-grid">
          {featured.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>
      <section className="home-note">
        <h2>What can you do with Randmo?</h2>
        <p>Pick a random number, flip a coin, roll dice, create passwords, discover colors, play a quick game or learn something new. All tools work directly in your browser.</p>
        <p>Made by</p>
        <h3> Utsav prajapati :24BIT081</h3>
        <h3>Somil varotariya :24BIT041</h3>
        <h3>Ashwin prajapati :24BIT088</h3>
      </section>
    </div>
  );
}
