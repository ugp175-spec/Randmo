const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

export const getSaved = () => read("randmo-saved");
export const getHistory = () => read("randmo-history");

export function addHistory(item) {
  const current = getHistory();
  const next = [{ ...item, id: Date.now() }, ...current].slice(0, 50);
  localStorage.setItem("randmo-history", JSON.stringify(next));
}

export function saveResult(item) {
  const current = getSaved();
  const exists = current.some((saved) => saved.tool === item.tool && saved.result === item.result);
  if (!exists) {
    localStorage.setItem("randmo-saved", JSON.stringify([{ ...item, id: Date.now() }, ...current]));
  }
}

export function removeSaved(id) {
  localStorage.setItem("randmo-saved", JSON.stringify(getSaved().filter((item) => item.id !== id)));
}

export function clearHistory() {
  localStorage.removeItem("randmo-history");
}
