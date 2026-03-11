import { heroData } from "../../../data/hero.js";
import { setHtml } from "../utils/dom.js";

export function renderHero() {
  const el = document.getElementById("hero-content");
  if (!el) {
    throw new Error("Element not found: #hero-content");
  }

  const liveBannerHtml = heroData.liveBanner
    ? `
      <a class="hero-live-banner" href="${heroData.liveBanner.href}">
        <img
          src="${heroData.liveBanner.imageUrl}"
          alt="${heroData.liveBanner.alt}"
        />
      </a>
    `
    : "";

  el.innerHTML = `
    <div class="hero-copy">
      <h1>${heroData.name}</h1>
      <p>${heroData.label}</p>
      ${liveBannerHtml}
    </div>
  `;
}
