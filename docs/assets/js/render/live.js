import { liveData } from "../../../data/live.js";
import { setHtml } from "../utils/dom.js";

export function renderLive() {
  const itemsHtml = liveData
    .map(
      (live) => `
        <li>
          <span class="live-date">${live.date}</span>
          <span class="live-title">${live.title}</span>
          <span class="live-place">${live.place}</span>
          <span class="live-detail">${live.detail}</span>
          <span class="live-ticketUrl">${live.ticketUrl}</span>
        </li>
      `
    )
    .join("");

  setHtml(
    "live",
    `
      <div class="section-inner">
        <h2>LIVE</h2>
        <ul class="live-list">
          ${itemsHtml}
        </ul>
      </div>
    `
  );
}
