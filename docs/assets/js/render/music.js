import { musicData } from "../../../data/music.js";
import { setHtml } from "../utils/dom.js";

export function renderMusic() {
  const linksHtml = musicData.links
    .map(
      (link) => `
        <a href="${link.url}" class="btn" target="_blank" rel="noopener noreferrer">
          ${link.name}
        </a>
      `
    )
    .join("");

  setHtml(
    "music",
    `
      <div class="section-inner">
        <h2>MUSIC</h2>
        <p>${musicData.description}</p>
        <div class="button-group">
          ${linksHtml}
        </div>
      </div>
    `
  );
}
