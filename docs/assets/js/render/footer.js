import { site } from "../../../data/site.js";
import { setHtml } from "../utils/dom.js";

export function renderFooter() {
  setHtml("footer", `<div class="footer-inner">${site.copyright}</div>`);
}
