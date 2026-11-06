import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { tools, categories } from "../data/tools";
import ToolCard from "../components/ToolCard";
import "./Explore.css";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => tools.filter((tool) => {
    const matchesText = `${tool.name} ${tool.description}`.toLowerCase().includes(search.toLowerCase());
    return matchesText && (category === "All" || tool.category === category);
  }), [search, category]);

  return (
    <div className="container explore-page">
      <div className="page-heading">
        <h1>Explore tools</h1>
        <p>Choose a tool and let chance make the decision.</p>
      </div>
      <label className="search-field">
        <Search size={19} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tools..." />
      </label>
      <div className="category-list">
        {categories.map((item) => (
          <button key={item} className={category === item ? "category-button selected" : "category-button"} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <div className="result-count">{filtered.length} tool{filtered.length === 1 ? "" : "s"} found</div>
      {filtered.length ? <div className="tool-grid">{filtered.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div> : <div className="empty-message">No tools found. Try another search.</div>}
    </div>
  );
}
