import { bioData } from "../../../data/bio.js";
import { setHtml } from "../utils/dom.js";

export function renderBio() {
  const paragraphsHtml = bioData.paragraphs
    .map((text) => `<p>${text}</p>`)
    .join("");

  setHtml(
    "bio",
    `
      <div class="section-inner">
        <h2>${bioData.title}</h2>
        <div class="bio-text">
          ${paragraphsHtml}
        </div>
      </div>
    `
  );
}
