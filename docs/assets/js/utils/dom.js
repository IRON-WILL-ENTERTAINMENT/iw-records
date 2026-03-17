export function setHtml(id, html) {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element not found: #${id}`);
  }
  el.innerHTML = html;
}
