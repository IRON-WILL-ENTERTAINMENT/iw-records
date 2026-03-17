import { contactData } from "../../../data/contact.js";
import { setHtml } from "../utils/dom.js";

export function renderContact() {
  const snsHtml = contactData.sns
    .map(
      (item) => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>
      `
    )
    .join("");

  setHtml(
    "contact",
    `
      <div class="section-inner">
        <h2>CONTACT & SNS</h2>
        <p>${contactData.description}</p>

        <a href="${contactData.contactFormUrl}" class="btn" target="_blank" rel="noopener noreferrer">
          CONTACT FORM
        </a>

        <div class="sns-links">
          ${snsHtml}
        </div>
      </div>
    `
  );
}
