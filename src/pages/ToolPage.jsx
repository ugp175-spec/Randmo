import { useState } from "react";
import { Link, useParams } from "react-router";
import { Copy, Heart, RefreshCw, ArrowLeft } from "lucide-react";
import { tools } from "../data/tools";
import { randomInt, randomItem, randomHex, countries, elements } from "../utils/random";
import { addHistory, saveResult } from "../utils/storage";
import "./ToolPage.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function ToolPage() {
  const { slug } = useParams();
  const tool = tools.find((item) => item.slug === slug);
  const [result, setResult] = useState("");
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [length, setLength] = useState("12");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [dateFrom, setDateFrom] = useState("2025-01-01");
  const [dateTo, setDateTo] = useState("2026-12-31");
  const [listText, setListText] = useState("Pizza\nBurger\nPasta");
  const [choice, setChoice] = useState("");
  const [gameMessage, setGameMessage] = useState("");

  if (!tool) return <div className="container tool-page"><h1>Tool not found</h1><Link to="/explore">Back to tools</Link></div>;

  const generate = () => {
    let value = "";
    switch (slug) {
      case "random-number": {
        const a = Number(min), b = Number(max);
        if (!Number.isInteger(a) || !Number.isInteger(b) || a > b) {
          setResult("Enter valid whole numbers (minimum must not exceed maximum)."); return;
        }
        value = String(randomInt(a, b)); break;
      }
      case "coin-flip": value = randomItem(["Heads", "Tails"]); break;
      case "dice-roll": value = String(randomInt(1, 6)); break;
      case "random-color": value = randomHex(); break;
      case "password-generator": {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
          (includeNumbers ? "0123456789" : "") + (includeSymbols ? "!@#$%&*?" : "");
        const size = Math.max(4, Math.min(64, Number(length) || 12));
        value = Array.from({ length: size }, () => chars[randomInt(0, chars.length - 1)]).join("");
        break;
      }
      case "yes-or-no": value = randomItem(["Yes!", "No!", "Maybe!", "Ask again later."]); break;
      case "random-letter": value = randomItem(alphabet); break;
      case "random-date": {
        const start = new Date(dateFrom + "T00:00:00").getTime();
        const end = new Date(dateTo + "T00:00:00").getTime();
        if (Number.isNaN(start) || Number.isNaN(end) || start > end) { setResult("Choose a valid date range."); return; }
        value = new Date(randomInt(start, end)).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        break;
      }
      case "random-list": {
        const items = listText.split("\n").map((x) => x.trim()).filter(Boolean);
        if (!items.length) { setResult("Enter at least one list item."); return; }
        value = randomItem(items); break;
      }
      case "rock-paper-scissors": {
        if (!choice) { setResult("Choose Rock, Paper or Scissors first."); return; }
        const computer = randomItem(["Rock", "Paper", "Scissors"]);
        const win = choice === computer ? "It's a draw!" :
          ((choice === "Rock" && computer === "Scissors") || (choice === "Paper" && computer === "Rock") || (choice === "Scissors" && computer === "Paper")) ? "You win!" : "Computer wins!";
        value = `You: ${choice} · Computer: ${computer} · ${win}`;
        break;
      }
      case "random-country": value = randomItem(countries); break;
      case "chemical-element": {
        const [name, symbol, number] = randomItem(elements);
        value = `${name} (${symbol}) — Atomic number ${number}`; break;
      }
      case "powerball-picker": {
        const nums = [];
        while (nums.length < 5) { const n = randomInt(1, 69); if (!nums.includes(n)) nums.push(n); }
        value = `${nums.sort((a,b) => a-b).join(" - ")}  |  Powerball: ${randomInt(1, 26)}`;
        break;
      }
      case "random-palette": value = Array.from({ length: 5 }, randomHex).join("  "); break;
      default: value = "No result";
    }
    setResult(value);
    setGameMessage("");
    addHistory({ tool: tool.name, result: value, date: new Date().toLocaleString() });
  };

  const copyResult = async () => {
    if (!result) return;
    try { await navigator.clipboard.writeText(result); setGameMessage("Copied to clipboard!"); }
    catch { setGameMessage("Copy is unavailable in this browser."); }
  };

  const save = () => {
    if (!result || result.startsWith("Enter ") || result.startsWith("Choose ")) return;
    saveResult({ tool: tool.name, result, date: new Date().toLocaleString() });
    setGameMessage("Saved to your collection!");
  };

  return (
    <div className="container tool-page">
      <Link to="/explore" className="back-link"><ArrowLeft size={16} /> All tools</Link>
      <div className="tool-panel">
        <span className="tool-label">{tool.category}</span>
        <h1>{tool.name}</h1>
        <p className="tool-description">{tool.description}</p>

        <div className="tool-controls">
          {slug === "random-number" && <>
            <label>Minimum number<input type="number" value={min} onChange={(e) => setMin(e.target.value)} /></label>
            <label>Maximum number<input type="number" value={max} onChange={(e) => setMax(e.target.value)} /></label>
          </>}
          {slug === "password-generator" && <>
            <label>Password length<input type="number" min="4" max="64" value={length} onChange={(e) => setLength(e.target.value)} /></label>
            <label className="check-label"><input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} /> Include numbers</label>
            <label className="check-label"><input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} /> Include symbols</label>
          </>}
          {slug === "random-date" && <>
            <label>From<input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} /></label>
            <label>To<input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} /></label>
          </>}
          {slug === "random-list" && <label className="full-field">Enter items (one per line)<textarea rows="5" value={listText} onChange={(e) => setListText(e.target.value)} /></label>}
          {slug === "rock-paper-scissors" && <div className="choice-row">{["Rock", "Paper", "Scissors"].map((item) => <button key={item} className={choice === item ? "choice selected" : "choice"} onClick={() => setChoice(item)}>{item}</button>)}</div>}
          {slug === "dice-roll" && <p className="hint">Roll a standard six-sided die.</p>}
          {slug === "powerball-picker" && <p className="hint">This creates a random combination only; it cannot predict lottery results.</p>}
        </div>

        <button className="generate-button" onClick={generate}><RefreshCw size={17} /> Generate</button>

        {result && <div className="result-box">
          <span>Your result</span>
          {slug === "random-color" && <div className="color-preview" style={{ background: result }} />}
          {slug === "random-palette" && <div className="palette-preview">{result.split("  ").map((color) => <div key={color} style={{ background: color }} title={color}><small>{color}</small></div>)}</div>}
          <strong>{result}</strong>
          <div className="result-actions">
            <button onClick={copyResult}><Copy size={15} /> Copy</button>
            <button onClick={save}><Heart size={15} /> Save</button>
          </div>
          {gameMessage && <small className="feedback">{gameMessage}</small>}
        </div>}
      </div>
    </div>
  );
}
