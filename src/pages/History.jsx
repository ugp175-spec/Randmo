import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { clearHistory, getHistory } from "../utils/storage";
import "./History.css";

export default function History() {
  const [items, setItems] = useState([]);
  useEffect(() => setItems(getHistory()), []);
  const clear = () => { clearHistory(); setItems([]); };

  return (
    <div className="container secondary-page">
      <div className="history-heading"><div><h1>Generation history</h1><p>Your recent results appear here.</p></div>
        {items.length > 0 && <button className="clear-button" onClick={clear}><Trash2 size={15} /> Clear history</button>}
      </div>
      {items.length ? <div className="saved-list">{items.map((item) => (
        <article className="history-item" key={item.id}>
          <strong>{item.tool}</strong><p>{item.result}</p><small>{item.date}</small>
        </article>
      ))}</div> : <div className="empty-card">No history yet. Generate a result using any tool.</div>}
    </div>
  );
}
