import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { getSaved, removeSaved } from "../utils/storage";
import "./Saved.css";

export default function Saved() {
  const [items, setItems] = useState([]);
  useEffect(() => setItems(getSaved()), []);
  const deleteItem = (id) => { removeSaved(id); setItems(getSaved()); };

  return (
    <div className="container secondary-page">
      <h1>Saved results</h1>
      <p>Your favorite generated results are stored in this browser.</p>
      {items.length ? <div className="saved-list">{items.map((item) => (
        <article className="saved-item" key={item.id}>
          <div><strong>{item.tool}</strong><p>{item.result}</p><small>{item.date}</small></div>
          <button onClick={() => deleteItem(item.id)} aria-label="Delete saved result"><Trash2 size={17} /></button>
        </article>
      ))}</div> : <div className="empty-card">No saved results yet. Open a tool and press Save after generating a result.</div>}
    </div>
  );
}
