import { heroData } from "../../../data/hero.js";
import { setHtml } from "../utils/dom.js";

export function renderHero() {
  setHtml(
    "hero",
    `
      <div class="hero-inner" style="--hero-bg-image: url('${heroData.backgroundImage}')">
        <h1>${heroData.name}</h1>
        <p>${heroData.label}</p>
      </div>
    `
  );
}
